const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Joke } = require('../models');
const withAuth = require('../utils/auth');
//Get all jokes created by sesssion user
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Joke.findAll({
    where: {
      user_id: req.session.user_id
    },
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
        attributes: ['username', 'id']
      }
    ]
  })
  .then(dbPostData => {
    const jokes = dbPostData.map(joke => joke.get({ plain: true }));
    console.log(jokes)
    res.render('dashboard', { jokes, loggedIn: req.session.loggedIn });
  })
});

module.exports = router;