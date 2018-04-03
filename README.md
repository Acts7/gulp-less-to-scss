gulp-less-to-scss
=======
A gulp plugin which converts less files to scss files

Download
-------

```
npm install gulp-less-to-scss
```


Usage : copy this to gulpfile.js and place in root folder where conversion will happen
-------

```javascript
var gulp = require('gulp');
var lessToScss = require('gulp-less-to-scss');
gulp.task('lessToScss',function(){
    gulp.src('convert/less/**/*.less')
		.pipe(lessToScss())
		.pipe(gulp.dest('result/core/scss'));
});
```

Notice
-------
Be Aware that not all less files can be converted properly.

If files are not converted well, you should correct them manually!!

LICENSE
-------

(MIT License)