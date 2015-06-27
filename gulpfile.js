var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('serve', function() {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(concat('websocket.js'))
        .pipe(gulp.dest('dist'));
});