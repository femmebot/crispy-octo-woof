#Gulp Basics

* Concatenate JavaScript files
* Minify JavaScript files
* Compile Sass into CSS
* Use Watch Task
* Scaffold tasks into multiple files

Often used to automate tasks in the development workflow and app build process for deployment.

`gulp serve` initiates Gulp in the dev environment

`gulp` will run the default task. creates a dist build of the app for deployment

To install `npm install gulp --save-dev` since it will only be used as a development-only dependency and won't be needed for production

#####Gulp Plugins

To install Gulp third-party libraries `npm install <pkg> --save-dev`

**gulp-concat**

* [gulp-concat](https://github.com/wearefractal/gulp-concat)

```
"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat');

gulp.task('concatScripts', function() {
    gulp.src([
      'js/jquery.js',
      'js/jquery.sticky.js',
      'js/main.js'])  // creates a stream
    .pipe(concat('app.js'))  // pipes stream into a single file
    .pipe(gulp.dest('js'));  // persists/writes to destination folder 'js'
});  // to run task, type `gulp concatScripts` in terminal

gulp.task("minifyScripts", function() {
	gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('compileSass', function() {
  gulp.src("scss/application.scss")
      .pipe(sass())
      .pipe(gulp.dest('css'));
})

gulp.task("default", ['concatScripts', 'minifyScripts', 'compileSass'], function() {
    console.log("the default task!!!!");
});

// To make sure it's working, `http-server -p 3000` to check

```

**gulp-uglify**
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify)

**gulp-rename**
* [gulp-rename](https://github.com/hparra/gulp-rename)

**gulp-sass**
* [gulp-sass](https://github.com/dlmanning/gulp-sass)

**gulp-sourcemaps**
* [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
* [Using source maps with SaSS](http://thesassway.com/intermediate/using-source-maps-with-sass)
* [Treehouse blog post on sourcemaps](http://blog.teamtreehouse.com/introduction-source-maps)

gulpfile.js with sourcemaps module added:

```
"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps');

gulp.task("concatScripts", function() {
    gulp.src([
        'js/jquery.js',
        'js/sticky/jquery.sticky.js',
        'js/main.js'
        ])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))  // writes map file as a sibling to js folder
    .pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", function() {
	gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('compileSass', function() {
  gulp.src("scss/application.scss")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))  // write map file as a sibling to css folder
      .pipe(gulp.dest('css'));
})

gulp.task("default", ['concatScripts', 'minifyScripts', 'compileSass'], function() {
    console.log("the default task!!!!");
});

```

#####Build Task Pipeline

```
"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
     del = require('del');

gulp.task("concatScripts", function() {
    return gulp.src([
        'js/jquery.js',
        'js/sticky/jquery.sticky.js',
        'js/main.js'
        ])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('compileSass', function() {
  return gulp.src("scss/application.scss")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))
      .pipe(gulp.dest('css'));
});

gulp.task('watchSass', function() {
  // return not needed b/c non task-dependent
  gulp.watch('scss/**/*.scss', ['compileSass']);  // glob pattern matches dir named scss and file ending in .scss
})

gulp.task('clean', function(){
  // removes files created by previous gulp tasks
  del(['dist', 'css/application.css*', 'js/app*.js*']);
})

gulp.task("build", ['minifyScripts', 'compileSass'], function(){
  // create a dist package
  return gulp.src(['css/application.css', 'js/app.min.js', 'index.html',
                   'img/**', 'fonts/**'], { base: './' })  // base maintains the dir structure
            .pipe(gulp.dest('dist'));
});

gulp.task("default", ["clean"], function(){
  // default task cleans up task-generated files/folders as a dependency,
  // then begins the build process
  gulp.start('build');  // start method not widely documented
});

```

#####Development Pipeline Tasks

Use gulp to watch files for changes and recompile them

```
"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
     del = require('del');

gulp.task("concatScripts", function() {
    return gulp.src([
        'js/jquery.js',
        'js/sticky/jquery.sticky.js',
        'js/main.js'
        ])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

// minify only necessary for Production, not Development pipeline
gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('compileSass', function() {
  return gulp.src("scss/application.scss")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))
      .pipe(gulp.dest('css'));
});

// gulp.task('watchSass', function() {
//   gulp.watch('scss/**/*.scss', ['compileSass']);
// })

gulp.task('watchFiles', function() {
  gulp.watch('scss/**/*.scss', ['compileSass']);
  gulp.watch('js/main.js', ['concatScripts']);
})

gulp.task('clean', function() {
  del(['dist', 'css/application.css*', 'js/app*.js*']);
});

gulp.task("build", ['minifyScripts', 'compileSass'], function() {
  return gulp.src(["css/application.css", "js/app.min.js", 'index.html',
                   "img/**", "fonts/**"], { base: './'})
            .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);

gulp.task("default", ["build"]);

```

Additional Resources:
* [Use Gulp to inject text into a file](https://github.com/klei/gulp-inject)
* [Use Gulp to serve your app in development with browser sync](http://www.browsersync.io/docs/gulp/)
* [Gulp advanced example on GitHub](https://github.com/hdngr/advanced-gulp-example)
* [All about Yeoman and Bower](http://yeoman.io/)


#####Resources

* [Gulp API Docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpsrcglobs-options)
* Writing code for better minification results: [Better JavaScript Minification](http://alistapart.com/article/better-javascript-minification)
