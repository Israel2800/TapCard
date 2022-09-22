const db = require('./connection');
const { User, Card, Major, Comment } = require('../models');
const { getIntrospectionQuery } = require('graphql');

db.once('open', async () => {
  await Major.deleteMany();

  const majors = await Major.insertMany([
    { name: 'CS' },
    { name: 'ART' },
    { name: 'BUSINESS' },
    { name: 'MATH' },
    { name: 'LAW' },
    { name: 'SCIENCES' }
  ]);

  console.log('majors seeded');

  await Comment.deleteMany();

  const comments = await Comment.insertMany([
    {
      commentBody: 'asdsad dfgdfdfs sadasd sadasd sadasd sadas',
      username: '123456',
      createdAt: 'Mar 15, 2015 at 12:00 am'
    },
    {
      commentBody: 'asdsad dfgdfdfs sadsadsa',
      username: '123456',
      createdAt: 'Mar 15, 2015 at 11:00 am'
    },
    {
      commentBody: 'asdsad dfgs sadsadsa',
      username: '654321',
      createdAt: 'Mar 15, 2015 at 11:50 am'
    },
  ]);

  console.log('comments seeded');

  await Card.deleteMany();

  const cards = await Card.insertMany([
    {
      name: 'Tin',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      major: majors[0]._id,
      linkedIn: 'dasd asdasd asdweqwe q',
      facebook: 'dasd feeq qweqwe qe',
      gitHub: 'dasd wqeqw wqeqweqe',
      comment:[{
        comments: [comments[0]._id, comments[2]._id]   
      }]
    },
    {
      name: 'Canned',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      major: majors[2]._id,
      linkedIn: 'dasd as asdweqwe',
      facebook: 'dasd fe qweqwe qe',
      gitHub: 'dasd wqeqw wqeeqe',
    },
    {
      name: 'Toet',
      major: majors[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      linkedIn: 'dasdadd asdasd asdweqwe q',
      facebook: 'bdabvvbsd feeq qweqwe qe',
      gitHub: 'dbavbbsd wqeqw wqeqweqe',
      comment:[{
        comments: [comments[1]._id]   
      }]
    },
  ]);

  console.log('cards seeded');

  await User.deleteMany();

  await User.create({
    username: '123456',
    email: 'pamela@testmail.com',
    password: '123456',
    card: [
      {
        cards: [cards[0]._id]
      }
    ]
  });

  await User.create({
    username: '654321',
    email: 'eholt@testmail.com',
    password: '654321',
    card: [
      {
        cards: [cards[1]._id]
      }
    ]
  });

  await User.create({
    username: '666666',
    email: 'eh@testmail.com',
    password: '666666',
    card: [
      {
        cards: [cards[2]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});
