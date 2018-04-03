var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require("gulp-babel"),
    jsmin = require('gulp-jsmin'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    cleanCss = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    sourcemaps = require("gulp-sourcemaps"),
    browserify = require('gulp-browserify');

gulp.task('js', function () {
    return gulp.src([
        'assets/js/main.js'
    ])
        .pipe(babel())
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('main.min.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('./public/js/'))
        .pipe(livereload())
        ;
});

gulp.task('css', function () {
    return gulp.src('assets/scss/main.scss') // path to folder we are working with
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss()) // minify
        .pipe(rename('main.min.css')) // rename minified
        .pipe(gulp.dest('public/css/')) // folder where to save
        .pipe(livereload())
        ;
});

gulp.task('php', function () {
    return gulp.src('**/*.php')
        .pipe(livereload())
        ;
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('assets/scss/**/*.scss', ['css']);
    gulp.watch('assets/js/**/*.js', ['js']);
    gulp.watch('**/*.php', ['php']);
});

gulp.task('default', ['css', 'js', 'php']);