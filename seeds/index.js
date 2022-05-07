const seedUsers = require('./user-seeds');
const seedJokes = require('./joke-seeds');
const seedVotes = require('./vote-seeds');
const seedComments = require('./comment-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedJokes();
  console.log('--------------');

  await seedVotes();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  process.exit(0);
};

seedAll();