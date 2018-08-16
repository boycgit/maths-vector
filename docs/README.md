# maths-vector

[![Build Status](https://travis-ci.org/boycgit/maths-vector.svg?branch=master)](https://travis-ci.org/boycgit/maths-vector) [![Coverage Status](https://coveralls.io/repos/github/boycgit/maths-vector/badge.svg?branch=master)](https://coveralls.io/github/boycgit/maths-vector?branch=master) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![npm version](https://badge.fury.io/js/maths-vector.svg)](https://badge.fury.io/js/maths-vector)

This repo is inspired by [victor](https://github.com/maxkueng/victor/) ,provide Vector class with methods for common vector operations。

The big difference from [victor](https://github.com/maxkueng/victor/) is that the Vector instance is immutable. 

## features
 - immutable, a Vector is not changed by its methods.([victor](https://github.com/maxkueng/victor/) is mutable，you should always call it's clone() function, so I had to create this new repo)
 - include [big.js](http://mikemcl.github.io/big.js/), support for arbitrary-precision decimal arithmetic; you can always using other lib (like  [bignumber.js](https://github.com/MikeMcl/bignumber.js/) and [decimal.js](https://github.com/MikeMcl/decimal.js/)) with ease by config。
 - manipulation functions are chainable, you can do `new Vector(1,2).add(2).multiply(3).dot(new Vector(4, 5))` and so on;
 - Can be used in both Node.js and the browser
 - Open source, under the MIT license and can be used without restrictions.


## Installation

### Node.js / Browserify

```bash
npm install maths-vector --save
```

```javascript
var Vector = require('maths-vector');
var vec = new Vector(42, 1337);
```

### Global object

Include the pre-built script.

```html
<script src="./dist/vector.umd.js"></script>
<script>
var vec = new Vector(42, 1337);
</script>
```

## Build & test

```bash
npm run build
```

```bash
npm test
```

## Document

suggested reading [online document](https://boycgit.github.io/maths-vector/).

or build local api document:
```bash
npm install jsdoc
npm run doc
```

then open the generated `out/index.html` file in your browser.

## License

[MIT](LICENSE).