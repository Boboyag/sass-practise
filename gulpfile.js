var gulp = require('gulp');
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean-css');

gulp.task('css',function() {
    //编译css
    return gulp.src('./sass/*.scss')
    .pipe(compass({
        config_file:'./config.rb',
        css:'stylesheets',
        sass:'sass'
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(clean())
    .pipe(gulp.dest('stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss',['css'])
});

gulp.task('default',['watch'],function() {
    console.log('task default');
})