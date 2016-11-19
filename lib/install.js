'use strict';
var bin = require('./');
bin.run(['--version'], function (err) {
	console.log('gifsicle  pre-build test passed successfully');
});
