//---Global Variables---//
const { Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');
//---Joke class---//
class Joke extends Model{}
    Joke.init(
        {
            id: {
                type: Datatypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            title:{
                type: Datatypes.STRING,
                allowNull:false
            },
            joke_body:{
                type: Datatypes.STRING,
                allowNull: false,
            },
            user_id:{
                type: Datatypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'id'
                }
            }
        },
        {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'joke'
        }
    );
    module.exports = Joke;

