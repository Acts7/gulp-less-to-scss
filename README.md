gulp-less-to-scss
=======
A gulp plugin which converts less files to scss files

Download
-------

```
npm install --save Acts7/gulp-less-to-scss
```


Setup : 
-------

### 1 copy the gulpfile.js to project root

```javascript
cp ./node_modules/gulp-less-to-scss/gulpfile.js ./gulpfile.js;
```

#### Alternatively copy this to gulpfile.js in project root
```javascript
var gulp = require('gulp');
var lessToScss = require('gulp-less-to-scss');
gulp.task('lessToScss',function(){
    gulp.src('convert/less/**/*.less')
		.pipe(lessToScss())
		.pipe(gulp.dest('result/core/scss'));
});
```

### 2 copy this to package.js as a dependency
````javascript
	"dependencies": {
		"gulp": "latest",
		"gulp-less-to-scss": "github:Acts7/gulp-less-to-scss"
	}
````

Usage :
-------
### Modify the gulpfile for folder paths. Then run the gulp script.
````javascript
gulp lessToScss
````


Notice
-------
Be Aware that not all less files can be converted properly.

If files are not converted well, you should correct them manually!!

LICENSE
-------

(MIT License)