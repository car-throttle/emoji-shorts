# Emoji-Shorts

![Love the Pixar Shorts](./image.gif)

Plenty of services love to use the emoji shortcodes in plain-text markup, so this library aims to simplify that process
for you, making 😎 become `:sunglasses:`, 💡 to `:bulb:`, etc. There's
[an amazing list of shortcodes here](http://www.webpagefx.com/tools/emoji-cheat-sheet/) if you want to explore them.

This module is built using [`lodash.toarray@4`](https://www.npmjs.com/package/lodash.toarray) and
[`mojier`](https://www.npmjs.com/package/mojier) (a big 👏 to both teams for their excellent work on those).

## Usage

```js
var emoji = require('emoji-shorts');

console.log(emoji.toPlain('These violent delights have violent ends 😈'));
// These violent delights have violent ends :smiling_imp:

console.log(emoji.toRick('The most elegant parts of me weren\'t written by you :thinking:'));
// These violent delights have violent ends :smiling_imp:
```
