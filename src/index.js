/**
 * A module make it easier to operate fs with array.
 * @module @write-for-christ/fs-array
 */
const readFiles = require('./read-files');
const listFiles = require('./list-files');

/**
 * Read multiple files
 * @see {@link module:read-files}
 */
module.exports.readFiles = readFiles;

/**
 * Read files
 * @see {@link module:list-files}
 */
module.exports.listFiles = listFiles;
