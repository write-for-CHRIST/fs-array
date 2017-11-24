/**
 * Get files to array
 * @module
 */
const walker = require('async-walk');

/**
 * List all files in a directory with required extension
 * @example
 * // | /path/to/directory
 * //   |- file1.json
 * //   |- file2.json
 * //   |- file3.json
 * //   |- file4.txt
 * //   |- file5.ini
 * 
 * const fsArray = require('@write-for-christ/fs-array');
 * fsArray.listFiles('/path/to/directory')
 *   .then(fileList => {
 *      console.log(fileList.length); // => 5
 *   });
 * 
 * fsArray.listFiles('/path/to/directory', '.json')
 *   .then(fileList => {
 *      console.log(fileList.length); // => 3
 *   });
 * 
 * fsArray.listFiles('/path/to/directory', '.txt')
 *   .then(fileList => {
 *      console.log(fileList.length); // => 1
 *   });
 * 
 * @param {string} p Path to directory to list file.
 * @param {string} [ext] File extension. Default: .json
 * @return {Promise<Array<string>>}
 */
module.exports = listFiles = async (p, ext) => {
  try {
    let files = await walker(p);
    if (ext) {
      files = files.filter(i => i.indexOf(ext) > -1);
    }
    return files;
  } catch (err) {
    return err;
  }
};
