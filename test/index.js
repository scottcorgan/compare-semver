var compareSemver = require('../');
var test = require('tape');
var versions = [
  '0.0.11',
  '0.1.0',
  '0.2.0',
  '0.1.11'
];

test('gets the max value in list', function (t) {
  var max = compareSemver.max(versions);
  t.equal(max, '0.2.0', 'max semver version');
  t.end();
});

test('gets the min value in list', function (t) {
  var min = compareSemver.min(versions);
  t.equal(min, '0.0.11', 'min semver version');
  t.end();
});