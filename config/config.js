var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'whatsnx'
    },
    port: 3000,
    db: 'mongodb://localhost/whatsnx'
  },

  test: {
    root: rootPath,
    app: {
      name: 'whatsnx'
    },
    port: 3000,
    db: 'mongodb://localhost/whatsnx-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'whatsnx'
    },
    port: 3000,
    db: 'mongodb://localhost/whatsnx-production'
  }
};

module.exports = config[env];
