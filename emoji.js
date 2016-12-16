var emoji = module.exports = {};
var library = require('./library.json');
var toArray = require('lodash.toarray');

emoji.toPlain = function (string) {
  return toArray((string || '').trim())
    .map(function (value) {
      return library.emoji.hasOwnProperty(value) ? ':' + library.emoji[value] + ':' : value;
    })
    .join('');
};

emoji.toRich = function (string) {
  return (string || '').trim().replace(/\n/g, ' \n').split(' ')
    .map(function (value) {
      if (value && value.length > 2 && value[0] === ':' && value[value.length - 1] === ':') {
        return value.split(':')
          .filter(function (val) { return !!val; })
          .map(function (val) {
            return library.alias.hasOwnProperty(val) ? library.alias[val] : ':' + val + ':';
          })
          .join('');
      } else return value;
    })
    .join(' ').replace(/ \n/g, '\n');
};
