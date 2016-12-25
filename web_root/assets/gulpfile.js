var gulp = require("gulp");  
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifyHTML = require('gulp-minify-html');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cached');
var pngquant = require('imagemin-pngquant');

gulp.task('default', function() {
  console.log('--------- no task ----------');
});

gulp.task('all', ['html', 'css', 'js', 'image']);
gulp.task('html', ['html-min']);
gulp.task('css', ['css-merge', 'css-min']);
gulp.task('js', ['js-merge', 'js-min']);
gulp.task('image', ['image-min']);

gulp.task("html-min", function() {
  gulp.src('../index_edit.html')
    .pipe(minifyHTML({ empty: true }))
    .pipe(rename("index.html"))
    .pipe(gulp.dest('../'))
    ;
});

gulp.task("css-merge", function() {
  var files = [
   './css/main.css'
  ];
  gulp.src(files)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./'))
    ;
});
gulp.task('css-min', function() {
  gulp.src('./bundle.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./'))
});

gulp.task("js-merge", function() {
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
   './js/views/NewsHealth.js',
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

gulp.task('js-min', function() {
  gulp.src('./bundle.js')
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./'))
});

gulp.task("image-min", function() {
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
