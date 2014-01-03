// grunt-docco-xt
// https://github.com/gonsfx/grunt-docco-xt
//
// Copyright (c) 2014 Christoph Werner
// Licensed under the MIT license.

module.exports = function(grunt) {
	'use strict';

	var doccoXT = require('docco-xt');

	grunt.registerMultiTask('doccoXT', 'Generate docs with docco-xt', function() {
		var files = this.filesSrc;

		if (!files || !files.length) {
			return grunt.log.warn('No files found');
		}

		doccoXT.document(this.options({ args: files }), this.async());
	});
};