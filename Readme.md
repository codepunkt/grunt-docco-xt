# grunt-docco-xt v0.1.0

Generate documentation with [docco-xt](https://github.com/gonsfx/docco-xt).

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-docco-xt --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-docco-xt');
```

## Documentation

_Run this task with the `grunt doccoXT` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### basedir
Type: `String`
Default: null

Relative paths for documented files will be based on this directory.

#### layout
Type: `String`
Default: 'parallel'

Layout used ('parallel' or 'linear')

#### output
Type: `String`
Default: 'docs'

Output directory.

### Usage Example

```js
doccoXT: {
	options: {
		basedir: 'src'
	},
	coffee: {
		options: {
			output: 'docs/coffee'
		},
		files: {
			src: [ 'src/coffee/**/*.coffee' ]
		}
	},
	js: {
		options: {
			output: 'docs/js'
		},
		files: {
			src: [ 'src/js/**/*.js' ]
		}
	}
}
```

## Release History

 * 2014-01-03   v0.1.0   Initial release






