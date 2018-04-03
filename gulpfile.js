var gulp = require('gulp');
var lessToScss = require('gulp-less-to-scss');
gulp.task('lessToScss',function(){
    gulp.src('convert/less/**/*.less')
		.pipe(lessToScss())
		.pipe(gulp.dest('result/scss/core/'));
});