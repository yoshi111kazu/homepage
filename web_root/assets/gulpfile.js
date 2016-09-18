var gulp = require("gulp");  
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifyHTML = require('gulp-minify-html');
var imagemin = require('gulp-imagemin');
//var jpegtran = require('imagemin-jpegtran');
//var optipng = require('imagemin-optipng');
var cache      = require('gulp-cached');
var pngquant = require('imagemin-pngquant');

gulp.task('default', function() {
  console.log('--------- default ----------');
});

gulp.task('all', ['imagemin', 'minify-html', 'concat_js', 'uglify']);

gulp.task("imagemin", function() {
  console.log('--------- imagemin ----------');
    gulp.src('./image/src/*.+(jpg|jpeg|png|gif|svg)')
    .pipe(cache('imagemining'))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: false }
      ],
      use: [pngquant()]
    }))
    .pipe(rename({prefix: '_'}))
    .pipe(gulp.dest('./image/'))
    ;
});

gulp.task("minify-html", function() {
  console.log('--------- minify-html ----------');
  gulp.src('../index_edit.html')
    .pipe(minifyHTML({ empty: true }))
    .pipe(rename("index.html"))
    .pipe(gulp.dest('../'))
    ;
});

/*
gulp.task("concat_css", function() {
  console.log('--------- concat CSS ----------');
  var files = [
   './css/bootstrap_custom04.min.css',
   './css/main.css',
   './css/font-awesome.min.css',
   './css/style.css'
  ];
  gulp.src(files)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./'))
    ;
});
*/

gulp.task("concat_js", function() {
  console.log('--------- concat JS ----------');
  var files = [
   './js/lib/jquery.min.js', './js/lib/bootstrap.min.js', './js/lib/json2.js',
   './js/lib/underscore-min.js', './js/lib/backbone-min.js', './js/lib/backbone.marionette.min.js',
   './js/models/rss-model.js', './js/collections/collection.js',
   './js/views/NewsMusic.js',
   './js/views/NewsItIt.js',
   './js/views/NewsItProgram.js',
   './js/views/NewsItInfra.js',
   './js/views/NewsItYuru.js',
   './js/views/NewsItLink.js',
   './js/views/NewsCar.js',
   './js/views/NewsGame.js',
   './js/views/Prof.js',
   './js/views/Blog.js',
   './js/routers/controller.js', './js/routers/router.js', './js/app.js',
   './js/main.js'
  ];
  gulp.src(files)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./'))
    ;
});

gulp.task('uglify', function() {
  console.log('--------- uglify ----------');
  gulp.src('./bundle.js')
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./'))
});
