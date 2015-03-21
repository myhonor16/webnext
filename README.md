WebNext
=======

[![License][license-img]][license-url] [![Version][version-img]][version-url] [![Dependency Status][gemnasium-img]][gemnasium-url] [![Open Issues][issues-img]][issues-url]

WebNext is a lightweight template for creating websites or webapps with modern web technologies (HTML5, CSS3, ES6).

## Getting Started

+ Via Git
  + `git clone https://github.com/myhonor16/webnext.git`
+ Via Yeoman (Comming soon)
  + Install Yeoman & it's dependencies `npm install -g yo bower gulp`
  + Install the generator `npm install -g generator-webnext`
  + Run Yeoman in your Project Directory `yo webnext`

## Usage

Pre-step: Make sure you have bower & gulp installed globally (`npm install -g bower gulp`)

1. Run `npm install` & `bower install` to install the default dependencies (not necessary if using yeoman generator)
  + NPM
    + `gulp`
    + `gulp-babel`
    + `gulp-concat`
    + `gulp-load-plugins`
    + `gulp-minify-css`
    + `gulp-plumber`
    + `gulp-sourcemaps`
    + `gulp-uglify`
    + `yargs`
    + `browser-sync`
  + Bower
    + `html5shiv`
    + `normalize-css`
2. Install via NPM or Bower any other plugins or libraries you'd like
3. Add said libraries to gulpfile.js (the gulpfile.js is well commented)
4. Run `gulp init`
5. From there you can run `gulp serve` to run start a server and watch for changes (via BrowserSync) or build on demand with just `gulp`
6. Whenever you add any new libraries to gulpfile.js, run `gulp full`

## List of Tasks
+ `styles`
  + `styles:lib`*
  + `styles:main`
+ `scripts`
  + `scripts:html5shiv`*
  + `scripts:lib`*
  + `scripts:main`
+ `serve`
+ `watch`
+ `full` & `init` (`init` is an alias of `full`)
  + `styles:lib`
  + `styles`
  + `scripts:html5shiv`
  + `scripts:lib`
  + `scripts`
+ `default`
  + `styles`
  + `scripts`

\* not called by parent task

[license-url]: https://github.com/myhonor16/webnext/blob/master/LICENSE
[license-img]: http://img.shields.io/badge/License-MIT-blue.svg?style=flat

[version-url]: https://github.com/myhonor16/webnext/releases
[version-img]: http://img.shields.io/badge/Version-1.0.0-brightgreen.svg?style=flat

[gemnasium-url]: https://gemnasium.com/myhonor16/webnext
[gemnasium-img]: http://img.shields.io/gemnasium/myhonor16/webnext.svg?style=flat

[issues-url]: https://github.com/myhonor16/webnext/issues
[issues-img]: http://img.shields.io/github/issues/myhonor16/webnext.svg?style=flat
