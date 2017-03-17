var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
    db: 'mongodb://localhost/treasureHunt_dev',
    port: 3000
  },
  test: {
    db: 'mongodb://localhost/treasureHunt_test',
    port: 8888
  }
}
