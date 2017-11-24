const path = require('path');
const test = require('ava');
const m = require('../src');

const testPath = path.join(__dirname, '../mock');
const mockFiles = [
  path.join(testPath, 'file1.json'),
  path.join(testPath, 'file2.json'),
  path.join(testPath, 'file3.json')
];

test('readFiles async', async t => {
  const contents = await m.readFiles(mockFiles, 'utf8');
  t.is(contents.length, 3);
  await t.throws(m.readFiles('not array path', 'utf8'), 'Not an array');
  await t.throws(m.readFiles([path.join(testPath, 'notexist.js')], 'utf8'));
});

test.cb('readFiles callback', t => {
  m.readFiles(mockFiles, (error, data) => {
    t.is(data.length, 3);
    t.end();
  }); /* ?. */
});

test.cb('readFiles callback error', t => {
  m
    .readFiles('not array path', (error, data) => {
      t.is(error.message, 'Not an array');
      t.is(data, null);
      t.end();
    })
    .catch(err => {
      t.throws(err);
      t.end();
    });
});

test('listFiles', async t => {
  const fileList = await m.listFiles(testPath);
  t.is(fileList.length, 5);
  t.true(fileList[0].endsWith('file1.json'));
});

test('listFiles with extension', async t => {
  t.is((await m.listFiles(testPath, '.json')).length, 3);
  t.is((await m.listFiles(testPath, '.txt')).length, 1);
  t.is((await m.listFiles(testPath, '.ini')).length, 1);
});
