/**
 * Read array module.
 * @module @write-for-christ/fs-array/fs-read-array
 */
const fs = require('fs');
const isArray = require('is-array');

/**
 * Read all files provided by `fileList` and return Promise if callback is not specify
 * @param {Array<string>} fileList Array of absolute path to read
 * @param {Function} callback
 */
module.exports = (fileList, callback) => {
  if (isArray(fileList)) {
    return new Promise((resolve, reject) => {
      const promises = [];
      let i = fileList.length;

      while (i--) {
        const promise = new Promise((resolve, reject) => {
          fs.readFile(fileList[i], 'utf8', (error, data) => {
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
