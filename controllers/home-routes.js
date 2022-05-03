const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Joke, Vote } =  require('../models')

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
    jokes.sort((a, b) => parseFloat(b.vote_count) - parseFloat(a.vote_count));
    res.render('homepage', { jokes, loggedIn: req.session.loggedIn });
  })
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('homepage');
  });
  
module.exports = router;