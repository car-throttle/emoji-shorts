var emoji = module.exports = {};
var mojier = require('mojier');
var toArray = require('lodash.toarray');

emoji.toPlain = function (string) {
  return toArray((string || '').trim())
    .map(function (value) {
      var plain = mojier.findAlias(value);
      return !!plain ? ':' + plain + ':' : value;
    })
    .join('');
};

emoji.toRich = function (string) {
  return (string || '').trim().replace(/\n/g, ' \n').split(' ')
    .map(function (value) {
      if (value && value.length > 2 && value[0] === ':' && value[value.length - 1] === ':') {
        return value.split(':')
          .filter(function (val) { return !!val; })
          .map(function (val) { return mojier.get(val) || ':' + val + ':'; })
          .join('');
      } else return value;
    })
    .join(' ').replace(/ \n/g, '\n');
};
