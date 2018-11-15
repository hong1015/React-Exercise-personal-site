let gulp = require('gulp'),
less = require('gulp-less'),
rename = require('gulp-rename'),
changed = require('gulp-changed'),
concat = require('gulp-concat');
cleanCSS = require('gulp-clean-css');
//cssmin = require('gulp-cssmin'); //this and cleancss are the same thing


//path//
const srcFrom = './src/assets/less/*.less';
const srcFromOrder = [
    './src/assets/less/reset.less',
    './src/assets/less/mixing.less',
    './src/assets/less/default.less',
];
const srcTo = "./src/assets/css/";

//
gulp.task('less', function () {

    return gulp.src(srcFromOrder) //pick the file
     .pipe(less()) //turn to css
    .pipe(cleanCSS()) // min the css files
    .pipe(rename({
        suffix: '.min'
    })) //rename the css file
        .pipe(concat('default.min.css'))
        .pipe(changed(srcTo))// only pass the changed files
    .pipe(gulp.dest(srcTo)) //output location

});

gulp.task('watch', function () {
    gulp.watch(srcFrom, ['less']);
}); //watching changes and run the function if anything changes

gulp.task('default', ['less', 'watch']); //run the code

