const router = require('express').Router();
const {User, Joke, Vote, Comment} = require('../../models');
const sequelize = require('sequelize');
const { json } = require('express/lib/response');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password']},
      where: {
          id: req.params.id
      },
      include: [
        {
          model: Joke,
          attributes: ['id', 'joke_body', 'title', 'created_at']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'created_at'],
          include: {
            model: Joke,
            attributes:['title']
          }
        },
        {
          model: Joke,
          attributes: ['title'],
          through: Vote,
          as: 'voted_posts'
        
        }
      ]
    })
    .then(dbPostData => {
     const user = dbPostData.get({ plain: true })
     console.log(user)
      res.render('single-user', { user, loggedIn: req.session.loggedIn, });
    })
  })

router.post('/', (req, res) => {

    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
  
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
    
          res.json(dbUserData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.post('/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });
  
module.exports = router;