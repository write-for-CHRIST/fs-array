const path = require('path');
const test = require('ava');
const m = require('../src');

test('readArray', async t => {
  const testPath = path.join(__dirname, '../src');
  const contents = await m.readArray([
    path.join(testPath, 'index.js'),
    path.join(testPath, 'fs-read-array.js')
  ]);

  t.is(contents.length, 2);
  await t.throws(m.readArray('not array path'), 'Not an array');
  await t.throws(m.readArray([path.join(testPath, 'notexist.js')]));
});

test.cb('readArray callback', t => {
  const testPath = path.join(__dirname, '../src');
  m.readArray(
    [path.join(testPath, 'index.js'), path.join(testPath, 'fs-read-array.js')],
    (error, data) => {
      t.is(data.length, 2);
      t.end();
    }
  ); /* ?. */
});

test.cb('readArray callback error', t => {
  m
    .readArray('not array path', (error, data) => {
      t.is(error.message, 'Not an array');
      t.is(data, null);
      t.end();
    })
    .catch(err => {
      t.throws(err);
      t.end();
    });
});
