const userSeeds = require('./userSeed.json');
const cardSeeds = require('./cardSeed.json');
const db = require('../config/connection');
const { Card, User } = require('../models');

db.once('open', async () => {
  try {
    await Card.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < cardSeeds.length; i++) {
      const { _id, cardAuthor } = await Card.create(cardSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: cardAuthor },
        {
          $addToSet: {
            cards: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});