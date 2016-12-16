var fs = require('fs');
var os = require('os');
var path = require('path');
var request = require('request');

request({
  method: 'GET',
  url: 'https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json',
  headers: {
    'User-Agent': os.hostname() + '-emoji-shorts',
  },
  json: true,
  timeout: 5000,
}, function (err, res, emojis) {
  if (err) throw err;
  if (!res || !res.statusCode) throw new Error('Invalid res');
  if (res.statusCode !== 200) throw new Error('Invalid res: ' + res.statusCode);
  if (!Array.isArray(emojis)) throw new Error('Invalid res:' + JSON.stringify(emojis, null, 2));

  var alias_map = {};
  var emoji_map = {};

  emojis.forEach(function (emoji) {
    emoji.aliases.forEach(function (alias) { alias_map[alias] = emoji.emoji; });
    emoji_map[emoji.emoji] = emoji.aliases.shift();
  });

  fs.writeFile(
    path.join(__dirname, '..', 'library.json'), JSON.stringify({ alias: alias_map, emoji: emoji_map }),
    'utf8', function (err) {
      if (err) throw err;

      console.log(
        'Formatted %d emojis into %d aliases and %d emojis',
        emojis.length, Object.keys(alias_map).length, Object.keys(emoji_map).length
      );

      console.log('Created library.json');
      process.exit(0);
    }
  );
});
