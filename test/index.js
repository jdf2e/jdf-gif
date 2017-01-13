'use strict';
var jdfGif = require("../");
var execFile = require('child_process').execFile;

var child = execFile(jdfGif, ['--version'], function(error, stdout, stderr) {
    if (error) {
        throw error;
    }
    console.log(stdout);
});