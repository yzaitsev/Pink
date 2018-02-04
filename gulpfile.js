'use strict';
 
var gulp            = require('gulp');
var sass            = require('gulp-sass');
var plumber         = require('gulp-plumber');
var postcss         = require('gulp-postcss');
var autoprefixer    = require('autoprefixer');
var mqpacker        = require("css-mqpacker");
var minify          = require('gulp-csso');
var rename          = require("gulp-rename");
var imagemin        = require('gulp-imagemin');
var browserSync     = require('browser-sync').create();
var svgstore        = require('gulp-svgstore');
var svgmin          = require('gulp-svgmin');
var path            = require('gulp-path');
var rigger          = require('gulp-rigger');
var uglify          = require('gulp-uglify');
var run             = require('run-sequence');
var del             = require('del');







gulp.task('clean', function () {
  return del("build/");
});



gulp.task('html', function() {
    gulp.src('app/*.html')
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.stream());
});



gulp.task('sass', function () {
  return gulp.src('app/sass/style.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
            autoprefixer({browsers: ['last 2 version']}),
            mqpacker({
                sort: true
            })
        ]))
    .pipe(gulp.dest('build/css/'))
    .pipe(minify())
    .pipe(rename('final.min.css'))
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.stream());
});






gulp.task('js', function () {
    gulp.src('app/js/*.js') 
        .pipe(rigger()) 
        .pipe(uglify()) 
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
});





gulp.task('image', function() {
    return gulp.src('app/image/**/*.*')
    .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.jpegtran({progressive: true})      
    ]))
    .pipe(gulp.dest('build/image/'))
    .pipe(browserSync.stream());
});



gulp.task('svgstore', function () {
    return gulp
        .src('app/image/svg/**/*.svg')
        .pipe(svgmin())
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(rename("symbols.svg"))
        .pipe(gulp.dest('build/image/svg'))
        .pipe(browserSync.stream());
});


gulp.task('fonts', function() {
    gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts/'))
    .pipe(browserSync.stream());
});



gulp.task('build', function(callback) {
  run('clean', 'html', 'sass', 'js', 'fonts', 'image','svgstore', callback);
});


gulp.task('serve', function() {

    browserSync.init({
        server: "./build"
    });


    gulp.watch("app/*.html", ['html']).on('change', browserSync.reload);
    gulp.watch("app/sass/**/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("app/js/**/*.js", ['js']).on('change', browserSync.reload);
    gulp.watch("app/image/**/*.*", ['image']).on('change', browserSync.reload);
    gulp.watch("app/image/svg/**/*.svg", ['svgstore']).on('change', browserSync.reload);
    gulp.watch("app/fonts/**/*.*", ['fonts']).on('change', browserSync.reload);


});
