/**
 * Read files in array
 * @module
 */
const fs = require('fs');
const isArray = require('is-array');

/**
 * Read all files provided by `fileList` and return Promise if callback is not specify
 *
 * @example <caption>readFiles</caption>
 *    const fsArray = require('@write-for-christ/fs-array');
 *    fsArray
 *      .readFiles(['path/to/file1.json', 'path/to/file2.json'], 'utf8')
 *      .then(contents => {
 *        console.log(contents.length); // 2
 *      });
 *
 * @param {Array<string>} fileList Array of absolute path to read
 * @param {string} [encoding=utf8] Encoding when read. Default: 'utf8'
 * @param {Function} [callback] Callback if you prefer it than Promise
 */
module.exports = (fileList, encoding = 'utf8', callback) => {
  if (typeof encoding !== 'string') {
    callback = encoding;
    encoding = 'utf8';
  }
  if (isArray(fileList)) {
    return new Promise((resolve, reject) => {
      const promises = [];
      let i = fileList.length;

      while (i--) {
        const promise = new Promise((resolve, reject) => {
          fs.readFile(fileList[i], encoding, (error, data) => {
            if (error) {
              reject(error);
            } else {
              resolve(data);
            }
          });
        });
        promises.push(promise);
      }

      Promise.all(promises)
        .then(contents => {
          if (callback) {
            callback(null, contents);
          }
          resolve(contents);
        })
        .catch(err => {
          if (callback) {
            callback(err, null);
          }
          reject(err);
        });
    });
  }
  if (callback) {
    callback(new Error('Not an array'), null);
  }
  return Promise.reject(new Error('Not an array'));
};
