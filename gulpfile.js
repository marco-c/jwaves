var gulp = require('gulp');
var fse = require('fs-extra');

gulp.task('default', ['clean'], function() {
  fse.mkdirSync('dist');
  fse.copySync('index.html', 'dist/index.html');
});

gulp.task('clean', function() {
  fse.removeSync('dist');
});
