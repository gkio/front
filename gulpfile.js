var gulp    = require('gulp')
var postcss = require('gulp-postcss');
var watch   = require('gulp-watch')
 

gulp.task('css', function () {

	var processors = [
		cssnext({
			'customProperties':true,
			'colorFunction':true,
			'curstomSelectros':true,
			}),
	]

    return gulp.src('postcss/*.css')
    	.pipe(postcss(processors))
        .pipe( sourcemaps.init() )
        // .pipe(postcss([require('')]))
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('compiled/css/') )
   
});

gulp.task('watch',function(){
	
	gulp.watch('work/postcss/*.css',['css'])
})

gulp.task('default',['css','watch'])