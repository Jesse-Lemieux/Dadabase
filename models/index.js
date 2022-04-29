const User = require('./User');
const Joke = require('./Joke')

//---Model Associations---//

User.hasMany(Joke, {
    foreignKey: 'user_id'
})

Joke.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

module.exports = {User, Joke}