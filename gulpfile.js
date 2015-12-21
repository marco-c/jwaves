var gulp = require('gulp');
var fse = require('fs-extra');
var oghliner = require('oghliner');

gulp.task('default', ['clean', 'build', 'offline']);

gulp.task('clean', function() {
  fse.removeSync('dist');
});

gulp.task('build', function() {
  fse.mkdirSync('dist');
  fse.copySync('index.html', 'dist/index.html');
});

gulp.task('offline', function() {
  return oghliner.offline({
    rootDir: 'dist',
    fileGlobs: [
      'index.html',
    ],
  });
});
