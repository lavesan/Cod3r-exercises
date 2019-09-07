const gulp = require('gulp')
const ts = require('gulp-typescript')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
// Arquivo de configuração do typescript
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(concat('typescriptCompiler.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})