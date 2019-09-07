const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin')

gulp.task('app.css', () => 
    gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('deps.min.css'))
        .pipe(uglifycss({ uglyComments: true }))
        .pipe(gulp.dest('dist/assets/css'))
)

gulp.task('app.js', () =>
    gulp.src('src/assets/js/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env'],
        }))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
)

gulp.task('app.imgs', () => 
    gulp.src('src/assets/imgs/*.*')
        .pipe(gulp.dest('dist/assets/imgs'))
)

gulp.task('app.html', () =>
    gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
)

gulp.task('app', gulp.series('app.css', 'app.js', 'app.imgs', 'app.html'))