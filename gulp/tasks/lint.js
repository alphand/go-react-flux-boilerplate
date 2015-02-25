var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config = require("../config");
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');

var jsxhint = require('jsxhint');
// var jsxhint = jshint({linter:'jsxhint'});


// JSHint and jscs

gulp.task('lint', function () {
  return gulp.src(['./src/**/*.jsx'])
    .pipe(plumber())
    // .pipe(jscs())
    .pipe(jshint({linter:jsxhint}))
    .pipe(jshint.reporter(stylish)); // Console output
});
