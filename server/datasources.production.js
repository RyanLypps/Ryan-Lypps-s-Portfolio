'use strict';

module.exports = {
  'mongoatlas': {
    'host': '',
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
