const babel = require('@babel/core');
const fs = require('fs');
const opt = require('../index.js');

function readFile(path) {
  return fs.readFileSync(`${__dirname}/${path}`, 'utf-8');
}

test('async', () => {
  const transform = babel.transformFileSync(`${__dirname}/src/async.js`, opt());
  expect(transform.code).toBe(readFile('dist/async.js'));
});
