const { task } = require('gulp');

task("hello", function(done) {
    console.log("Hello Gulp!");
    done();
})