if (parseInt(process.versions.node.split('.')[0]) < 6) throw new Error('vmz requires Node.js version 6 or newer.');

module.exports = require('./lib/main');
