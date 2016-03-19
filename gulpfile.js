var gulp    = require('gulp')
var postcss = require('gulp-postcss');
var watch   = require('gulp-watch')
var cssnext = require('postcss-cssnext')
var swig = require('gulp-swig')


gulp.task('swig', function() {
  gulp.src('./magicGoesHere/swig/*.html')
    .pipe(swig())
    .pipe(gulp.dest('./compiled/html/'))
});

gulp.task('css', function () {

	var processors = [
		cssnext({
			'customProperties':true,
			'colorFunction':true,
			'curstomSelectros':true,
			}),
	]

    return gulp.src('./magicGoesHere/postcss/*.css')
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
	
    gulp.watch('magicGoesHere/postcss/*.css',['css'])
	gulp.watch('magicGoesHere/swig/*.swig',['swig'])
})

gulp.task('default',['css','swig','watch'])