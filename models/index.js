const User = require('./User');
const Joke = require('./Joke');
const Vote = require('./Vote')

//---Model Associations---//

User.hasMany(Joke, {
    foreignKey: 'user_id'
})

Joke.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})
User.belongsToMany(Joke, {
    through: Vote,
    as: 'voted_posts',
  
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Joke.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(Joke, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Joke.hasMany(Vote, {
    foreignKey: 'post_id'
  });

  module.exports = { User, Joke, Vote };