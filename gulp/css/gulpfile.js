const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('css', () => {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ uglyComments: true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('html', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('default', gulp.series('css', 'html'))