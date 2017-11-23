// Type definition for @write-for-christ/fs-array

export interface FSArray {
  /**
   * Read file content in an absolute array path.
   * @param {Array<string>} fileList List of absolute files path
   * @param {string|option} encoding Encoding when read file
   * @param {(error: any, contents: Array<any>) => {}} callback Callback function
   * @return {Promise<Array<any>>}
   */
  readArray(fileList: Array<string>, encoding?: string, callback?: (error: any, contents: Array<any>) => {}): Promise<Array<any>>;
}

declare const fsArray: FSArray;
export default fsArray;