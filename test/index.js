'use strict';
var gifsicle = require("../");
var fs = require("fs");
var execFile = require('child_process').execFile;
var path = require("path");

execFile(gifsicle, ['--version'], function(error, stdout, stderr) {
    if (error) {
        throw error;
    }
});

var testPath = path.join(__dirname, "1_mini.gif");
if (fs.existsSync(testPath)) {
    fs.unlinkSync(testPath)
}

execFile(gifsicle, ['-o', testPath, path.join(__dirname, "1.gif")], error => {
    if (error) {
        throw error;
    }
});