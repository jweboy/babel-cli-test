const gulp = require('gulp')
const babel = require('gulp-babel')

function transform (done) {
  gulp.src('package/src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/package'))
  done()
}

gulp.task('default', transform)
