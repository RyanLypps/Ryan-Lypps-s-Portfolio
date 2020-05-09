'use strict';

module.exports = {
  'mongoatlas': {
    'host': 'mongodb://ghoster:12345@my-portfolio-shard-00-00-1zgcd.mongodb.net',
    'port': 27017,
    'url': process.env.MONGODB_URI,
    'database': 'mongodb',
    'password': '12345',
    'name': 'mongoatlas',
    'user': 'ghoster',
    'useNewUrlParser': true,
    'connector': 'mongodb',
  },
};
