# Documentation

## template.html
1. Barebones Styles - Some styles to give the page it's basic layout (e.g. center the content) before the the rest of the stylesheet files load
2. `font-size: 62.5%;` & `font-size: 1.6em;` - This gives you base 10 rem & em that behave as normal. `font-size: 62.5%;` first sets the root font size to base 10. `font-size: 1.6em;` then sets the font size back to normal (16 px if browser font size is 16px, 14 px if browser font size is 14 px, etc)
3. Stylesheet `<link />` outside of `<head>` - Async CSS hack (http://waa.ai/vXZ1)
4. html5shiv & IE only message - html5shiv is a shim that adds support for the new html5 elements to IE (9 & earlier). The IE only message tells people using IE (all versions lol) to upgrade to something more recent.

## styles/main.scss

## scripts/main.js
