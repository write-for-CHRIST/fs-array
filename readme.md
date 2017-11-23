# fs-array [![Build Status](https://travis-ci.org/write-for-CHRIST/fs-array.svg?branch=master)](https://travis-ci.org/write-for-CHRIST/fs-array) [![codecov](https://codecov.io/gh/write-for-CHRIST/fs-array/branch/master/graph/badge.svg)](https://codecov.io/gh/write-for-CHRIST/fs-array)

> File system fs with array operation and Promise support.

## Install

```
$ npm install @write-for-christ/fs-array
```

## Usage

```js
const fsArray = require('@write-for-christ/fs-array');

// Promise way
fsArray
  .readArray(['/path/to/file1.json', '/path/to/file2.json'])
  .then(contents => {
    console.log(contents.length); //=> 2
  })
  .catch(err => console.error(err));

// Callback way
fsArray.readArray(
  ['/path/to/file1.json', '/path/to/file2.json'],
  (err, contents) => {
    if (err) {
      console.error(err);
    } else {
      console.log(contents.length); //=> 2
    }
  }
);
```

## API

### readArray(fileList, [callback])

#### fileList

Type: `Array<string>`

List of absolute files path to read.

#### callback

Type: `Function`

Callback take first param as `error`, the second is `contents`

## License

MIT © [Write For Christ](http://writeforchrist.org)
