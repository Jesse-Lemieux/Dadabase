const {Joke} = require('../models')

const jokedata = [
    {
      title: 'QB',
      joke_body: 'Why did the coach go to the bank? To get his quarter back.',
      user_id: 10
    },
    {
        title: 'karate pig',
        joke_body: 'What do you call a pig that does karate? A pork chop.',
        user_id: 9
      },
      {
        title: 'bike',
        joke_body: 'Why did the bike fall over? It was two tired.',
        user_id: 8
      },
      {
        title: 'golf',
        joke_body: 'Why did the golfer bring two pairs of pants? In case he gets a hole in one.',
        user_id: 7
      },
      {
        title: 'police',
        joke_body: 'What did the police officer say to his belly button? Youre under a vest.',
        user_id: 6
      },
      {
        title: 'accident',
        joke_body: 'Why did the man get hit by a bike everyday? He was stuck in a vicious cycle.',
        user_id: 5
      },
      {
        title: 'bartender',
        joke_body: 'What did the bartender say to the turkey sandwich that tried to order a beer? sorry we dont serve food here.',
        user_id: 4
      },
      {
        title: 'seagull',
        joke_body: 'Why do seagulls fly over the sea? If they flew over the bay, they would be bagels.',
        user_id: 3
      },
      {
        title: 'flu',
        joke_body: 'Whats the difference between swine flu and bird flu? One requires tweetment, the other requires oinkment.',
        user_id: 2
      },
      {
        title: 'Cast',
        joke_body: 'Why do people say break a leg when you go on stage? Because every play has a cast.',
        user_id: 1
      },
      {
        title: 'gator',
        joke_body: 'What do you call an alligator detective? an investigator.',
        user_id: 1
      },
      {
        title: 'spooky',
        joke_body: 'What kind of ghost has the best hearing? the eeriest.',
        user_id: 2
      },
      {
        title: 'cemetary',
        joke_body: 'Why are there gates around cemetaries? because people are dying to get in.',
        user_id: 3
      },
      {
        title: 'pen',
        joke_body: 'Why shouldnt you write with a broken pen? because its pointless.',
        user_id: 4
      },
      {
        title: 'stocks',
        joke_body: 'Where can you buy soup in bulk? the stock market.',
        user_id: 5
      },
      {
        title: '...',
        joke_body: 'Whats brown and sticky? a stick',
        user_id: 6
      },
      {
        title: 'eviction',
        joke_body: 'What did the yoga instructor say to the landlord when he tried to evict her? Namaste.',
        user_id: 7
      },
      {
        title: 'Vampire',
        joke_body: 'How do you tell if a vampire is sick? see if he is coffin.',
        user_id: 8
      },
      {
        title: 'fake',
        joke_body: 'What do you call fake spaghetti? an im-pasta.',
        user_id: 9
      },
      {
        title: 'farm',
        joke_body: 'Why did the farmer win an award? He was outstanding in his field.',
        user_id: 10
      },
]

const seedJokes = () => Joke.bulkCreate(jokedata);

module.exports = seedJokes;