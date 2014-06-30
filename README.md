# semver-greatest

Find the greatest semantic version out of an array of verisons

## Install

```
npm install compare-semver --save
```

### Usage

```js
var compare = require('compare-semver');
var versions = [
  '0.0.11',
  '0.1.0',
  '0.2.0',
  '0.1.11'
];

var maxSemver = compare.max(versions);
```

## Methods

### max(versions)

Returns the greatest version from the list of versions

* `versions` - an array of semantic versions

### min(versions)

Returns the smallest version from the list of versions

* `versions` - an array of semantic versions

### gt(version, versions)

Compare that  single version is greater than all versions in the list

* `version` - the version to compare
* `versions` - an array of semantic versions

### lt

Compare that  single version is less than all versions in the list

* `version` - the version to compare
* `versions` - an array of semantic versions

## Run Tests

```
npm install
npm test
```
