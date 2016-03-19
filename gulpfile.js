var gulp       = require('gulp')
var postcss    = require('gulp-postcss');
var watch      = require('gulp-watch')
var cssnext    = require('postcss-cssnext')
var swig       = require('gulp-swig')
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('compiled/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('compiled/min-css/'));
});


gulp.task('swig', function() {
  gulp.src('./magicGoesHere/swig/*.html')
    .pipe(swig())
    .pipe(swig({defaults: { cache: false }}))
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
    gulp.watch('./compiled/css/*.css',['minify-css'])
    gulp.watch('magicGoesHere/postcss/*.css',['css'])
	gulp.watch('magicGoesHere/swig/*.html',['swig'])
})

gulp.task('default',['css','swig','watch'])