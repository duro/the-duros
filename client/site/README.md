# Clutch: Angular Seed

This angular seed is a part of the Clutch Framework family. It can be used as a standalone angular boilerplate, or can be used as a part of a larger Clutch full-stack app.

As an angular seed, it takes a modular approach to structuring your app. It encourages folders to be used to keep components of your app organized in a way that makes them easy to move between other apps.

It utilizes RequireJS and the Angular-UI project, UI-Router, to help achieve this modular approach.

## Initial setup (Not using Clutch Yeoman Generator)

1. Clone this repo down into your project folder

2. Install dependencies

	```
	$ npm install && bower install
	```

	* **NOTE:** If you must have both [Grunt CLI](http://gruntjs.com/getting-started) and [Bower](http://bower.io/#installing-bower) installed in you global NPM packages

3. If you will be using the SASS capabilities built into this seed, you will need to install the Compass gem

	`$ gem install compass`

## Using the built-in Grunt tasks

This seed comes with a wide array of ready to go Grunt tasks to automate your build and dev process

### `grunt build:[dev|release]`

This task will run a full suite of build tasks including compiling all JS to a single optimized file, compiling all SASS, and for release builds, optimizing both JS (with source map) and CSS into minified packages.

This built package will default to a `build` directory. This output directory can be changed by altering the 'buildDir' property of the `package.json` file.

### `grunt watch`

This task will watch various folders and build the changed files.

### `grunt server`

This task does a few things

* Builds the app into the build directory (in dev mode)
* Starts a simple HTTP server accessible at `http://localhost:9001`
* Starts the `watch` task


