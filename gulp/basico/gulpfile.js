const gulp = require('gulp');

// Crio a task
gulp.task('copiar', (done, error) => {
    // Pode receber regex aqui
    // Copia todos os arquivos txt filhos diretos desta pasta
    gulp.src(['pastaA/*.txt'])
        .pipe(gulp.dest('dist1'))
    console.log('copiou os arquivos da "pastaA" na pasta "dist1"')
    // Acerto na task
    done();
    // Erro na task
    // error();
})

gulp.task('fim', done => {
    // Copia todos os arquivos txt filhos desta pasta
    gulp.src(['pastaA/**/*.txt'])
        .pipe(gulp.dest('dist2'))
    console.log('copiou os arquivos da "pastaA" na pasta "dist2"')
    done();
})

// Crio a task 'default' e chamo primeiro a task 'copiar' e logo após, a 'fim'
gulp.task('default', gulp.series('copiar', 'fim'))