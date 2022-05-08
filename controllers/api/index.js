//Export api routes for use in the main index
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const jokeRoutes = require('./joke-routes');
const commentRoutes = require('./comment-routes');
router.use('/users', userRoutes);
router.use('/jokes', jokeRoutes);
router.use('/comments', commentRoutes);
module.exports = router;