const router = require('express').Router();
const sequelize = require('sequelize');
const { User, Joke } = require('../../models')
const withAuth = require('../../utils/auth')

//---Get all jokes---//
router.get('/', (req, res) => {
    Joke.findAll({
        attributes: [
            'id',
            'joke_body',
            'title',
            'created_at',
        ]
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})