/* eslint no-unused-vars:0, no-unused-expressions:0 */
const yargs = require('yargs'),
Davos = require('davos'),
ConfigEditor = require('../config-editor');
exports.command = 'setup'
exports.aliases = ['create']
exports.desc = ''
exports.builder = {}
exports.handler = (argv) => {
   new ConfigEditor(argv).createConfig();
}
