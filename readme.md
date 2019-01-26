# is-same-angle

[![npm version](https://img.shields.io/npm/v/is-same-angle.svg)](https://www.npmjs.com/package/is-same-angle)
[![Build Status](https://travis-ci.org/anoff/is-same-angle.svg?branch=master)](https://travis-ci.org/anoff/is-same-angle)
[![Coverage Status](https://coveralls.io/repos/github/anoff/is-same-angle/badge.svg?branch=master)](https://coveralls.io/github/anoff/is-same-angle?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/anoff/is-same-angle.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/npm/is-same-angle/badge.svg)](https://snyk.io/test/npm/is-same-angle)
[![Outdated dependencies](https://david-dm.org/anoff/is-same-angle.svg)](https://david-dm.org/anoff/is-same-angle)

> check if two angles are pointing in the same/similar direction


## Install

```
$ npm install --save is-same-angle
```


## Usage

Returns `true` if first and second argument are same angles. By default the angles must be passed in **radian**.

```js
const isSameAngle = require('is-same-angle');

isSameAngle(0, 2 * Math.PI);
//=> true

// Use the options argument for degrees
isSameAngle(0, 360, {isDegree: true});
//=> true
```


## API

### isSameAngle(angle1, angle2, [options]) : `Boolean`

#### angle1 [rad]

Type: `number`

First angle by default it is assumed to be in radian format. See _options_ for using other angle units.

#### angle2 [rad]

Type: `number`

Second angle by default it is assumed to be in radian format. See _options_ for using other angle units.

#### options

##### isDegree

Type: `boolean`<br>
Default: `false`

Interpret the `angle1` and `angle2` values in degrees.

##### tolerance [rad]

Type: `number`<br>
Default: `0.1`

If the angles are not exactly identical but within `tolerance` it is still considered same. Should be supplied in same unit as angle.

## Related projects

- [is-opposed-angle](https://github.com/anoff/is-opposed-angle): same thing different angle

## License

MIT © [anoff](http://anoff.io)
