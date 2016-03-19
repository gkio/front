var gulp    = require('gulp')
var postcss = require('gulp-postcss');
var watch   = require('gulp-watch')
var cssnext = require('postcss-cssnext')

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
        .pipe(postcss([ require('postcss-animation'),
        				require('postcss-color-gray'),
        				require('autoprefixer'),
                        require('precss'),
                        require('rucksack-css'),
        				require('postcss-center'),
        				require('postcss-responsive-images'),
        				require('postcss-input-style'),
        				 ]))        
        .pipe( gulp.dest('compiled/css/') )
   
});

gulp.task('watch',function(){
	
	gulp.watch('postcss/*.css',['css'])
})

gulp.task('default',['css','watch'])