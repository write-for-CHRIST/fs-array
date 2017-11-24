// Type definition for @write-for-christ/fs-array

export interface FSArray {
  /**
   * Read file content in an absolute array path.
   * @param {Array<string>} fileList List of absolute files path
   * @param {string} [encoding] Encoding when read file
   * @param {(error: any, contents: Array<any>) => {}} [callback] Callback function
   * @return {Promise<Array<any>>}
   */
  readFiles(fileList: Array<string>, encoding?: string, callback?: (error: any, contents: Array<any>) => {}): Promise<Array<any>>;
  listFiles(dir: string, ext?: string): Promise<Array<string>>;
}

declare const fsArray: FSArray;
export default fsArray;