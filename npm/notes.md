#npm Basics

`npm` displays commands

`npm <cmd> -h` displays help info for a particular command

`npm install http-server -g` installs http-server package globally
[http-server](https://www.npmjs.com/package/http-server)

`NODE_ENV=production npm install` to run npm in a production environment

To install all packages specified in your package.json file:
```
npm install
```
If needed, specify flags (i.e., `npm install --python=python2`)
```
npm install <flags>
```

`npm outdated` to check if any packages need to be updated



####Managing Package Dependencies

`npm init` a built-in utility to help create a package.json file

`npm help json` for documentation

`npm install <pkg> --save` afterwards to install a package and save it as a dependency in the package.json file



####Uninstalling Modules

`npm uninstall <pkg>` to uninstall a package

`npm uninstall <pkg>` to uninstall globally

`npm uninstall <pkg> --save` to uninstall a local dependency and remove from package.json

To uninstall a local development dependency and remove from package.json `npm uninstall <pkg> --save-dev`


####Resources:

[npm site](http://npmjs.com/)


####npm Package Examples:
* [Express](http://npmjs.com/)
* [Passport](http://passportjs.org/)
* [jQuery Plugins](https://www.npmjs.com/browse/keyword/jquery-plugin)
* [Grunt](http://gruntjs.com/)
* [gulp.js](http://gulpjs.com/)
* [CoffeeScript](http://coffeescript.org/)
* [TypeScript](http://www.typescriptlang.org/)
* [Sass](http://sass-lang.com/)
* [Cordova](http://cordova.apache.org/)
* [PhoneGap](http://phonegap.com/)
* [Ionic](http://ionicframework.com/)
* [johny-five](http://ionicframework.com/)
* [Espruino](http://www.espruino.com/)
* [Tessel](https://tessel.io/)
