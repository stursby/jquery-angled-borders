/*------------------------------------*\
    Plugins
\*------------------------------------*/

var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var header      = require('gulp-header');
var jshint      = require('gulp-jshint');
var stylish     = require('jshint-stylish');
var rename      = require('gulp-rename');
var pkg         = require('./package.json');
var del         = require('del');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Banner
var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' * @author <%= pkg.author %>',
    ' */',
    ''].join('\n');


// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './',
            index: 'example.html'
        },
        open: false,
        notify: false
    });
});


/*------------------------------------*\
    Clean
\*------------------------------------*/

gulp.task('clean', function(cb) {
    del(['dist'], cb);
});



/*------------------------------------*\
    Scripts
\*------------------------------------*/

gulp.task('scripts', ['clean'], function() {
    return gulp.src('src/*.js')
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(rename(pkg.name + '.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream:true}));
});



/*------------------------------------*\
    Watch
\*------------------------------------*/

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['lint', 'scripts']);
    gulp.watch(['*.html'], reload);
});



/*------------------------------------*\
    Lint
\*------------------------------------*/

gulp.task('lint', function() {
    return gulp.src(['src/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});



/*------------------------------------*\
    Default
\*------------------------------------*/

gulp.task('default', ['watch', 'lint', 'scripts', 'browser-sync']);