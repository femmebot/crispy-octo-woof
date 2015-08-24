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

gulp.task("default", ["concatScripts"], function() {
    console.log("the default task!!!!");
});

// To make sure it's working, `http-server -p 3000` to check

```

**gulp-uglify**
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify)



**gulp-rename**
* [gulp-rename](https://github.com/hparra/gulp-rename)





#####Resources

* [Gulp API Docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpsrcglobs-options)
* Writing code for better minification results: [Better JavaScript Minification](http://alistapart.com/article/better-javascript-minification)
