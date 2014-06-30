var semver = require('semver');

exports.max = function (versions) {
  var max = '0.0.0';
  
  versions.forEach(function (version) {
    if (semver.gt(version, max)) max = version;
  });
  
  return max;
};

exports.min = function (versions) {
  var min = '999999999999999999.0.0';
  
  versions.forEach(function (version) {
    if (semver.lt(version, min)) min = version;
  });
  
  return min;
};