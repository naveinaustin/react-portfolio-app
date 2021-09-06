'use strict'

var gulp = require('gulp'),
	del = require('del'),
	imagemin = require('gulp-imagemin');


// Clean
gulp.task('clean', function() {
    return del(['public/images']);
});

// Images
gulp.task('imagemin', function() {
  return gulp.src('images-src/**/*.{png,jpg,gif,jpeg,svg}')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('public/images'));

  
});

gulp.task('movewsimg', function() {
  	gulp.src('public/images/workspace-1280538_1280.jpg')
  		.pipe(gulp.dest('src'));

  	return del(['public/images/workspace-1280538_1280.jpg']);
});

gulp.task('build', gulp.series('clean', gulp.parallel('imagemin'), 'movewsimg'));