const db = require('./connection');
const { User, Card, Major } = require('../models');

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

  await Card.deleteMany();

  const cards = await Card.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      major: majors[0]._id,
      linkedIn: 2.99,
      facebook: 500
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      major: majors[0]._id,
      linkedIn: 1.99,
      facebook: 500
    },
    {
      name: 'Toilet Paper',
      major: majors[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      linkedIn: 7.99,
      facebook: 20
    },
    {
      name: 'Handmade Soap',
      major: majors[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      linkedIn: 3.99,
      facebook: 50
    },
    {
      name: 'Set of Wooden Spoons',
      major: majors[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      linkedIn: 14.99,
      facebook: 100
    },
    {
      name: 'Camera',
      major: majors[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      linkedIn: 399.99,
      facebook: 30
    },
    {
      name: 'Tablet',
      major: majors[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      linkedIn: 199.99,
      facebook: 30
    },
    {
      name: 'Tales at Bedtime',
      major: majors[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      linkedIn: 9.99,
      facebook: 100
    },
    {
      name: 'Spinning Top',
      major: majors[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      linkedIn: 1.99,
      facebook: 1000
    },
    {
      name: 'Set of Plastic Horses',
      major: majors[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      linkedIn: 2.99,
      facebook: 1000
    },
    {
      name: 'Teddy Bear',
      major: majors[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      linkedIn: 7.99,
      facebook: 100
    },
    {
      name: 'Alphabet Blocks',
      major: majors[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      linkedIn: 9.99,
      facebook: 600
    }
  ]);

  console.log('cards seeded');

  await User.deleteMany();

  await User.create({
    name: 'Pamela',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        cards: [cards[0]._id, cards[0]._id, cards[1]._id]
      }
    ]
  });

  await User.create({
    name: 'Elijah',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
