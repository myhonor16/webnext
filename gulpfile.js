var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	plg = gulpLoadPlugins({
		rename: {
			'gulp-minify-css': 'minifyCSS'
		}
	});

// Build
	gulp.task('styles::lib', function() {
		// Libraries
		return gulp.src(['./bower_components/normalize-css/normalize.css'])
			.pipe(plg.plumber())
			.pipe(plg.concat('lib.css'))
			.pipe(plg.minifyCSS())
			.pipe(gulp.dest('./styles/e/'));
	});

	gulp.task('styles::main', function() {
		// Your CSS
		return gulp.src(['./styles/main.css'])
			.pipe(plg.plumber())
			.pipe(plg.concat('main.css'))
			.pipe(plg.minifyCSS())
			.pipe(gulp.dest('./styles/e/'));
	});

	gulp.task('styles', ['styles::lib', 'styles::main']);

	gulp.task('scripts::lib', function() {
		// Libraries
		return gulp.src(['./bower_components/'])
			.pipe(plg.plumber())
			.pipe(plg.concat('lib.js'))
			.pipe(plg.uglify({
				mangle: false,
				output: {
					comments: true
				}
			}))
			.pipe(gulp.dest('./scripts/e/'));
	});

	gulp.task('scripts::main', function() {
		// Your JS
		return gulp.src(['./main.js'])
			.pipe(plg.plumber())
			.pipe(plg.concat('main.js'))
			.pipe(plg.uglify())
			.pipe(gulp.dest('./scripts/e/'));
	});

	gulp.task('scripts', ['scripts::lib', 'scripts::main']);

// Watch
	gulp.task('watch', function() {
		gulp.watch('./*.css', ['styles']);
		gulp.watch('./*.js', ['scripts']);
	});

// Default
	gulp.task('default', ['styles', 'scripts']);

