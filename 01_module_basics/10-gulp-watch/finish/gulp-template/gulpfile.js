// const { task } = require('gulp');
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function(done) {
  return gulp
    .src(["./src/sass/**/*.scss", "!./src/sass/widget.scss"])
    // *.scss - all files at the end of the path
    //  **/*.scss - match all files at the end of the path plus all children files and folders
    // !*.scss or !**/*.scss - exclude the matching expressions
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"));
  done();
});

gulp.task("watch", function() {
  gulp.watch("./src/sass/**/*.scss", gulp.series(["sass"]))
});
