var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var server = require('gulp-server-livereload');

gulp.task('watch-less', function () {
  return gulp.src('./styles/*.less')
  	.pipe(watch('./styles/*.less'))
    .pipe(less())
    .pipe(gulp.dest('./styles/css'));
});

gulp.task('styles', function () {
    return gulp.src('scss/*.scss')
        .pipe(watch('scss/*.scss'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('webserver', ['watch-less'], function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});