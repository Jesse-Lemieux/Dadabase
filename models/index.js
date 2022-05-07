const User = require('./User');
const Joke = require('./Joke');
const Vote = require('./Vote')
const Comment = require('./Comment')

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
    foreignKey: 'joke_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(Joke, {
    foreignKey: 'joke_id',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Joke.hasMany(Vote, {
    foreignKey: 'joke_id'
  });

  Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Comment.belongsTo(Joke, {
    foreignKey: 'joke_id',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Joke.hasMany(Comment, {
    foreignKey: 'joke_id'
  });
  
  module.exports = { User, Joke, Vote, Comment };