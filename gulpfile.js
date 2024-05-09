const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')

function styles (cb) {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

function images (cb) {
    return gulp.src('./src/images/*')
    .pipe(gulp.dest('./dist/images'))
}

function scripts (cb) {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts/'))
}

exports.default = gulp.parallel(styles, images, scripts)
exports.watch = function() {
    gulp.watch('./src/styles/*scss', gulp.parallel(styles),
    gulp.watch('./src/scripts/*js', gulp.parallel(scripts)))
}