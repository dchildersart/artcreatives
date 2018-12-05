var sassLint = require('gulp-sass-lint');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

// Starts the WebServer and watching the HTML and SCSS files
gulp.task('serve', function() {

    browserSync.init({
        server: {
          baseDir: ["./PROJECTS/", "./TEMPLATES"],
          directory: true
        }
    });

    gulp.watch(['./PROJECTS/**/*.scss'], ['sass']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});


// Compresses SCSS to CSS
gulp.task('sass', function () {
  return gulp.src('./PROJECTS/**/*.scss', {base: "./"})
    .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
    .pipe(rename(function (path) {
      path.dirname += "/../build/";
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});


// Lint Tasks

gulp.task('sass-lint', function () {
    return gulp.src([
        './**/*.scss',
        '!./node_modules/**/*.scss'
    ])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('watch', function() {
  gulp.watch('./**/*.scss', ['sass-lint']);
});

gulp.task('dev', ['serve', 'watch']);
