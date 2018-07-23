const babel = require('@babel/core');
const opt = require('../index.js');
const fs = require('fs');

function readFile(path) {
	return fs.readFileSync(`${__dirname}/${path}`, 'utf-8');
}

test('async', () => {
	const transform = babel.transform(readFile('src/async.js'), opt);
	expect(transform.code).toBe(readFile('dist/async.js'));
});
