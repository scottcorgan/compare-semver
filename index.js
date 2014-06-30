var semver = require('semver');

var max = exports.max = function (versions) {
  var max = '0.0.0';
  
  versions.forEach(function (version) {
    if (semver.gt(version, max)) max = version;
  });
  
  return max;
};

var min = exports.min = function (versions) {
  var min = '999999999999999999.0.0';
  
  versions.forEach(function (version) {
    if (semver.lt(version, min)) min = version;
  });
  
  return min;
};

exports.gt = function (v, versions) {
  var m = max(versions);
  return semver.gt(v, m);
};

exports.lt = function (v, versions) {
  var m = min(versions);
  return semver.lt(v, m);
};