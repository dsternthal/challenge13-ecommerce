const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock music',
    id: 1,
  },
  {
    tag_name: 'pop music',
    id: 2,
  },
  {
    tag_name: 'blue',
    id: 3,
  },
  {
    tag_name: 'red',
    id: 4,
  },
  {
    tag_name: 'green',
    id: 5,
  },
  {
    tag_name: 'white',
    id: 6,
  },
  {
    tag_name: 'gold',
    id: 7,
  },
  {
    tag_name: 'pop culture',
    id: 8,
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
