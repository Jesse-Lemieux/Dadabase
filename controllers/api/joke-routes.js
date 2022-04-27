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
            'created_at'
        ]
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

//---Get single joke---//

router.get('/:id', (req, res) => {
    Joke.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'joke_body',
            'title',
            'created_at'
        ]
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

//--Post joke---//

router.post('/', withAuth, (req, res) => {
    Joke.create({
        title: req.body.title,
        joke_body: req.body.joke_body,
        user_id: req.session.user_id
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})