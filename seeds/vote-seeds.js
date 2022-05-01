const {Vote} = require('../models')

const jokedata = [
    {
      user_id: 9,
      joke_id: 19
    },
    {
      user_id: 1,
      joke_id: 8
    },
    {
      user_id: 8,
      joke_id: 12
    },
    {
      user_id: 8,
      joke_id: 19
    },
    {
      user_id: 9,
      joke_id: 3
    },
    {
      user_id: 3,
      joke_id: 16
    },
    {
      user_id: 4,
      joke_id: 7
    },
    {
      user_id: 10,
      joke_id: 7
    },
    {
      user_id: 3,
      joke_id: 18
    },
    {
      user_id: 9,
      joke_id: 16
    },
    {
      user_id: 3,
      joke_id: 17
    },
    {
      user_id: 10,
      joke_id: 2
    },
    {
      user_id: 6,
      joke_id: 10
    },
    {
      user_id: 5,
      joke_id: 11
    },
    {
      user_id: 6,
      joke_id: 1
    },
    {
      user_id: 9,
      joke_id: 18
    },
    {
      user_id: 6,
      joke_id: 15
    },
    {
      user_id: 6,
      joke_id: 7
    },
    {
      user_id: 6,
      joke_id: 4
    },
    {
      user_id: 1,
      joke_id: 16
    },
    {
      user_id: 10,
      joke_id: 18
    },
    {
      user_id: 4,
      joke_id: 10
    },
    {
      user_id: 10,
      joke_id: 5
    },
    {
      user_id: 5,
      joke_id: 16
    },
    {
      user_id: 6,
      joke_id: 17
    },
    {
      user_id: 1,
      joke_id: 15
    },
    {
      user_id: 7,
      joke_id: 13
    },
    {
      user_id: 6,
      joke_id: 3
    },
    {
      user_id: 6,
      joke_id: 13
    },
    {
      user_id: 7,
      joke_id: 1
    },
    {
      user_id: 4,
      joke_id: 15
    },
    {
      user_id: 2,
      joke_id: 18
    },
    {
      user_id: 9,
      joke_id: 10
    },
    {
      user_id: 10,
      joke_id: 15
    },
    {
      user_id: 8,
      joke_id: 1
    },
    {
      user_id: 10,
      joke_id: 8
    },
    {
      user_id: 2,
      joke_id: 13
    },
    {
      user_id: 9,
      joke_id: 20
    },
    {
      user_id: 1,
      joke_id: 17
    },
    {
      user_id: 10,
      joke_id: 9
    },
    {
      user_id: 10,
      joke_id: 3
    },
    {
      user_id: 5,
      joke_id: 6
    },
    {
      user_id: 6,
      joke_id: 12
    },
    {
      user_id: 5,
      joke_id: 2
    },
    {
      user_id: 6,
      joke_id: 14
    },
    {
      user_id: 8,
      joke_id: 18
    },
    {
      user_id: 3,
      joke_id: 4
    }
  ];

const seedVotes = () => Vote.bulkCreate(jokedata);

module.exports = seedVotes;