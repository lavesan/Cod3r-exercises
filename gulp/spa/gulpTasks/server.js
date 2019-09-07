const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorChanges', (done) => {
    watch('src/**/*.html', gulp.series('app.html'))
    watch('src/**/*.js', gulp.series('app.js'))
    watch('src/**/*.css', gulp.series('app.css'))
    watch('src/assets/imgs/**/*.*', gulp.series('app.imgs'))
    done();
})

gulp.task('server', gulp.series('monitorChanges', () => 
    gulp.src('dist').pipe(webserver({
        // Sempre que for atualizado, dá um reload
        livereload: true,
        // Porta da aplicação
        port: 8080,
        // Quando roda o comando para gerar o build, abre uma aba no browser
        open: true,
    }))
))