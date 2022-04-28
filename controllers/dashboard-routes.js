const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Joke } = require('../models');
const withAuth = require('../utils/auth');

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
      'created_at'
    ]
  })
  .then(dbPostData => {
    const jokes = dbPostData.map(joke => joke.get({ plain: true }));
    res.render('dashboard', { jokes, loggedIn: true });
  })
});

module.exports = router;