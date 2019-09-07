const gulp = require('gulp')
const util = require('gulp-util')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

// Cai aqui quando rodo um `gulp --production`
if (util.env.production) {
    gulp.task('default', gulp.series('app', 'deps'))
} else {
    gulp.task('default', gulp.series('app', 'deps', 'server'))
}