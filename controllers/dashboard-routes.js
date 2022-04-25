const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  res.render('dashboard', {loggedIn: true})
});

module.exports = router;