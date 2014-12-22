var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify');

// var livereload = require('gulp-livereload');

// Build
	gulp.task('css', function() {
		// Libraries
		gulp.src(['./bower_components/normalize-css/normalize.css'])
			.pipe(plumber())
			.pipe(concat('lib.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest('.'));
			/*.pipe(livereload({
				auto: false
			}));*/
		
		// Your CSS
		gulp.src(['./main.css'])
			.pipe(plumber())
			.pipe(concat('main.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest('.'));
			/*.pipe(livereload({
				auto: false
			}));*/

	gulp.task('js', function() {
		// Libraries
		/*gulp.src(['./bower_components/'])
			.pipe(plumber())
			.pipe(concat('lib.js'))
			.pipe(uglify({
				mangle: false,
				output: {
					comments: true
				}
			}))
			.pipe(gulp.dest('.'));*/
			/*.pipe(livereload({
				auto: false
			}));*/

		// Your JS
		gulp.src(['./main.js'])
			.pipe(plumber())
			.pipe(concat('main.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./'));
			/*.pipe(livereload({
				auto: false
			}));*/
	});

// Watch
	gulp.task('watch', function() {
		// livereload.listen();

		gulp.watch('./*.css', ['css']);
		gulp.watch('./*.js', ['js']);
	});

// Default
	gulp.task('default', ['css', 'js'], function() {
	});