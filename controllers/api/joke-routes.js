const router = require('express').Router();
const sequelize = require('sequelize');
const { User, Joke, Vote, Comment } = require('../../models')
const withAuth = require('../../utils/auth')

//---Get all jokes---//

router.get('/', (req, res) => {
    Joke.findAll({
        attributes: [
            'id',
            'joke_body',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE joke.id = vote.joke_id)'), 'vote_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'joke_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes:['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
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
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE joke.id = vote.joke_id)'), 'vote_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'joke_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes:['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if(!dbPostData){
            res.status(404).json({message: 'No joke found with that id!'});
            return;
        }
        const jokes = dbPostData.get({ plain: true });
        console.log(jokes.comments)
        res.render('single-joke', {
            loggedIn: req.session.loggedIn,
            jokes
        });
       
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})
// Upvote joke
router.put('/upvote', withAuth, (req, res) => {
    // custom static method created in models/Post.js
    Joke.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, User })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;