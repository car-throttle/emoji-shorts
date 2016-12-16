var emoji = require('./emoji'); // require('emoji-shorts');

console.log(emoji.toPlain('These violent delights have violent ends 😈'));
console.log(emoji.toRich('The most elegant parts of me weren\'t written by you :thinking:'));

// _______           _______  _______  ______  _________ _______  _        _______
// |  ____ \|\     /||  ___  ||  ____ ||  __  \ \__   __/|  ___  || \    /||  ____ \
// | |    \/| |   | || |   | || |    ||| |  \  |   | |   | |   | ||  \  | || |    \/
// | |      | |   | || |___| || |____||| |   | |   | |   | |___| ||   \ | || |_____
// | | ____ | |   | ||  ___  ||     __|| |   | |   | |   |  ___  || |\ \| ||_____  |
// | | \_  || |   | || |   | || |\ |   | |   | |   | |   | |   | || | \   |      | |
// | |___| || |___| || |   | || | \ \__| |__/  |___| |___| |   | || |  \  |/\____| |
// |_______||_______||/     \||/   \__/|______/ \_______/|/     \||/    \_|\_______|
//
//             ___    ___   _______  _______  _        _______
//            |   |  |___  |  ____ \|  ___  || \      |  ___  ||\     /||\     /|
//            |   |  |     | |    \/| |   | || |      | |   | || \   / || \   / |
//            |___|  |     | |      | |___| || |      | |___| | \ \_/ /  \ \_/ /
//        _____       ___  | | ____ |  ___  || |      |  ___  |  | _ |    \   /
//          |   |  | |     | | \_  || |   | || |      | |   | | / / \ \    | |
//          |   |--| |--   | |___| || |   | || |____/\| |   | || /   \ |   | |
//          |   |  | |___  |_______||/     \||_______/|/     \||/     \|   |_|

console.log('\n', emoji.toPlain([
  'Listen baby, ain\'t no mountain high, ⛰',
  'Ain\'t no valley low, ain\'t no river wide enough baby ❤️',
  'If you need me call me no matter where you are, 😎',
  'No matter how far; don\'t worry baby 😇',
  'Just call my name; I\'ll be there in a hurry 💨',
  'You don\'t have to worry, 😅'
].join('\n')), '\n');

console.log(emoji.toRich([
  'Ooh-oo child :smile:',
  'Things are gonna get easier :joy:',

  'Ooh-oo child :thumbsup:',
  'Things\'ll get brighter :sweat_smile:',

  'Ooh-oo child',
  'Things are gonna get easier :sweat_drops:',

  'Ooh-oo child',
  'Things\'ll get brighter :bulb:',
].join('\n')), '\n');
