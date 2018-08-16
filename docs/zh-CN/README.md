# maths-vector

[![Build Status](https://travis-ci.org/boycgit/maths-vector.svg?branch=master)](https://travis-ci.org/boycgit/maths-vector) [![Coverage Status](https://coveralls.io/repos/github/boycgit/maths-vector/badge.svg?branch=master)](https://coveralls.io/github/boycgit/maths-vector?branch=master) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![npm version](https://badge.fury.io/js/maths-vector.svg)](https://badge.fury.io/js/maths-vector)

该仓库是因 [victor](https://github.com/maxkueng/victor/) 激发而编写的，主要是为了提供数学中的 **向量操作** 的能力。

之所以 ”重复造轮子“ 是因为 [](https://github.com/maxkueng/victor/) 实例是可变（mutable）,使用起来非常的掣肘

## features

- immutable, 每个 Vector 实例在调用实例方法后数值不变。(相对应的，[victor](https://github.com/maxkueng/victor/) 库的实例是 mutable 的，你总是得调用其 `clone()` 函数，这也是我创建这个库的原因之一)
- 内置 [big.js](http://mikemcl.github.io/big.js/), 这样就天然支持任意精度的十进制算术; 而且通过配置使用其他库(比如[bignumber.js](https://github.com/MikeMcl/bignumber.js/)、[decimal.js](https://github.com/MikeMcl/decimal.js/)这些库等)
- 函数方法都可链式调用，比如 `new Vector(1,2).add(2).multiply(3).dot(new Vector(4, 5))` 等
- 支持在 Node.js 和浏览器环境使用
- 开源, 基于 MIT 协议，可自由使用源码

## 安装

### Node.js / Browserify

```bash
npm install maths-vector --save
```

```javascript
var Vector = require('maths-vector');
var vec = new Vector(42, 1337);
```

### 全局对象

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

## 文档

```bash
npm run doc
```

在浏览器中打开所生成的 `out/index.html` 文件

## License

[MIT](LICENSE).