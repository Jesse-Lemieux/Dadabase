//---Global Variables---//
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
//---Joke class---//
class Joke extends Model {
    static upvote(body, models) {
      return models.Vote.create({
        user_id: body.user_id,
        joke_id: body.post_id
      }).then(() => {
        return Joke.findOne({
          where: {
            id: body.joke_id
          },
          attributes: [
            'id',
            'joke_url',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE joke.id = vote.joke_id)'), 'vote_count']
          ],
          include: [
              {
                  model: models.User,
                  attributes: ['username']
              }
          ]
        });
      });
    }
  }

Joke.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            title:{
                type: DataTypes.STRING,
                allowNull:false
            },
            joke_body:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_id:{
                type: DataTypes.INTEGER,
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

