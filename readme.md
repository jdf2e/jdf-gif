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
