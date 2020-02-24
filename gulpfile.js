const {task,dest,src,series,parallel,start} = require('gulp');
const browserify = require('gulp-browserify');
const uglify = require("gulp-uglify");
const connect = require("gulp-connect");
const watch = require("gulp-watch");

task('render', function(done) {
  src('./assets/js/main.js')
    .pipe(browserify({ transform: ['vueify', 'babelify', 'aliasify'] }))
    .pipe(uglify())
    .pipe(dest('./assets/build'))
  done();
})

task('connect', function() {
	connect.server({
		port: 8080,
		livereload: true
  });
});

task('watch-and-reload', series('render', function() {
  watch(['assets/templates/**',"assets/js/main.js", "assets/css/**"], function() {
    start('render');
  }).pipe(connect.reload());
}));

task('default',parallel("render", "watch-and-reload", "connect"))
