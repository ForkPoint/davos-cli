/* eslint no-unused-vars:0, no-unused-expressions:0 */
const yargs = require('yargs'),
Davos = require('davos');
exports.command = 'split'
exports.aliases = ['s']
exports.desc = 'Split metadata'
exports.builder = {
  out: {
    alias: 'o',
    describe: 'Output folder',
  }
};
exports.handler = (argv) => {
   new Davos.Core(argv, false).split();
}
