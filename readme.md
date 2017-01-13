[![NPM](https://nodei.co/npm/jdf-gif.png?downloads=true)](https://nodei.co/npm/jdf-gif/)

[![NPM version](https://badge.fury.io/js/jdf-gif.png)](http://badge.fury.io/js/jdf-gif) [![Build Status](https://travis-ci.org/jdf2e/jdf-gif.svg?branch=master)](https://travis-ci.org/jdf2e/jdf-gif)

# jdf-gif

> A gifsicle wrapper for JDF


## Install

```
$ npm install --save jdf-gif
```


## Usage

```js
const {execFile} = require('child_process');
const gifsicle = require('jdf-gif');

execFile(gifsicle, ['-o', 'output.gif', 'input.gif'], err => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global jdf-gif
```

```
$ jdf-gif --help
```
