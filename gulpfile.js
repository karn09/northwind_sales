var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var gulpPlugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

// TODO browserify doesn't support bower plugins, need to override in order to get below to work.

var paths = {
  root: 'browser/',
  src: 'browser/js/',
  dist: 'browser/js/dist/'
};

gulp.task('browserify', function() {
  return browserify(paths.src + 'app.js', {debug: true})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(paths.dist));
  // .pipe(gulpPlugins.connect.reload());
});
