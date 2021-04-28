// const { task } = require('gulp');
const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", function(done) {
  return gulp
    .src(["./src/sass/**/*.scss", "!./src/sass/widget.scss"])
    // *.scss - all files at the end of the path
    //  **/*.scss - match all files at the end of the path plus all children files and folders
    // !*.scss or !**/*.scss - exclude the matching expressions
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"));
  done();
});
