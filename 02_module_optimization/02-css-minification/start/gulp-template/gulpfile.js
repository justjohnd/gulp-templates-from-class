// const { task } = require('gulp');
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const less = require("gulp-less");

// Sass

gulp.task("sass", function(done) {
  return (
    gulp
      .src(["./src/sass/**/*.scss", "!./src/sass/widget.scss"])
      // *.scss - all files at the end of the path
      //  **/*.scss - match all files at the end of the path plus all children files and folders
      // !*.scss or !**/*.scss - exclude the matching expressions
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("./dist/css"))
  );
  done();
});

// Less

gulp.task("less", function(done) {
  return gulp
    .src("./src/less/styles.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"));
  done();
});

// Watch task with BrowserSync

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    browser: "firefox developer edition"
  });

  gulp
    .watch(
      ["./src/sass/**/*.scss", "**/*.html", "./src/less/styles.less"],
      gulp.series(["sass", "less"])
    )
    .on("change", browserSync.reload);
});
