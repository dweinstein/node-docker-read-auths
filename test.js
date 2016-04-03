'use strict';
const test = require('tape');
const conf = require('.');
const join = require('path').join;

test('from file', function (t) {
  const res = conf.fromFile(join(__dirname, 'example.json'));
  t.ok(res, 'read config');
  t.deepEqual(res, {
    'foo.bar.baz': {
      username: '@foo',
      password: 'superduperdo'
    }
  }, 'normalized config');
  t.end();
});

