const gulp = require('gulp')
// Concatena tudo em 1 só arquivo
const concat = require('gulp-concat')
// Compacta o código
const uglify = require('gulp-uglify')
// Transpila o código
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            // Remove os comentários
            comments: false,
            presets: ['env'],
        }))
        .pipe(uglify())
        .on('error', (err) => console.log('Deu merda: ', err))
        // Nome do arquivo que será gerado
        .pipe(concat('minificado.min.js'))
        .pipe(gulp.dest('dist'))
})