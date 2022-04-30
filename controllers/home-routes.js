const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } =  require('../models')

router.get('/', (req, res) => {
  Joke.findAll({
    attributes: [
      'id',
      'joke_body',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE joke.id = vote.joke_id)'), 'vote_count']
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    const jokes = dbPostData.map(joke => joke.get({ plain: true }));
    res.render('homepage', { jokes, loggedIn: true });
  })
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
module.exports = router;