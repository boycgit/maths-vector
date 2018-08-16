# Quick Start

## 安装

```js
npm install maths-vector --save
```

Commonjs 方式：

```js
var Vector = require('maths-vector');
```

ES6 用法:

```js
import Vector from 'maths-vector';
```

或者在浏览器中使用:

```js
<script src="./dist/vector.umd.js"></script>
```

## 基本用法

按照惯例, 我们通常用两个参数创建向量, 支持 string、number 原始值:

```js
var v1 = new Vector(3, 4),
    v2 = new Vector('10', '1'),
    v3 = new Vector(8, '5');
```

还可以从数组或对象创建向量 (应包含 `x`、`y` 属性):

```js
var v4 = Vector.fromArray([3, 4]); // x:3, y:4
var v5 = Vector.fromObject({x: 3, y: 4}); // x:3, y:4
```

## 属性

与数学概念保持一致, 向量使用 `(x,y)` 表示, 您也可以访问其 `x`、`y`、`length`、`angle` 等属性:

```js
var v1 = new Vector(3, 4);
v1.x === '3'; // true
v1.y === '4';
v1.length === '5';
v1.angle === '0.6435'; // radian
v1.angleDegree === '30'; // degree
```

请特别注意返回的值始终是 `String` 类型, 这是为了支持任意精度十进制算术, 就像 [big.js](http://mikemcl.github.io/big.js/) 库所做的那样。

## 算术运算

不仅支持标准的向量算术操作（加、减、乘、除等）, 还提供编程方面的便利用法。 举个例子：

持标准的向量算术操作

```js
var v1 = new Vector(1, 2);
var v2 = new Vector(3, 4);

v1.add(v2).toString(); // x:4, y:6
v1.subtract(v2).toString(); // x:-2, y:-2
v1.multiply(5).toString(); // x:5, y:10
v2.divide(5).toString(); // x:0.6, y:0.8
```

Follow the mathematical standard，like `multiply` and `divide` operation is not supported for two vectors, but in the program you can apply directly them with two vectors:

```js
v1.multiply(v2).toString(); // x:3, y:8
v1.divide(v2).toString(); // x: 0.3333, y:0.5
```

This library also supply Linear Algebra mathematical, such as `dot` prudction、 `cross` production、 `distance` operation:

```js
var v1 = new Vector(1, 2);
var v2 = new Vector(3, 4);
v1.dot(v2).toString(); //  11
v1.cross(v2).toString(); // -2
v1.distance(v2).toString(); // 2.8284
```

and aslo offer `projectOnto`、`normalize`、`rotate` methods for specific operation, you can move to [API Reference](/api/) for detail.

## Change Math Operator System

### built-in operator system

As we all known, Numbers in JavaScript has some intersting consequences, so you have to be a little careful with your arithmetic if you're used to math in C or Java.

> You can check out [this MDN Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Numbers) on JavaScript

If you want arbitrary-precision decimal arithmetic operation, prefer to use third -party library, for example, [big.js](http://mikemcl.github.io/big.js/)、 [bignumber.js](https://github.com/MikeMcl/bignumber.js/)、[decimal.js](https://github.com/MikeMcl/decimal.js/) and so on;

For this purpose, this library default uses built-in [big.js](http://mikemcl.github.io/big.js/) (Only 5.9 KB minified), so you can practice arbitrary-precision decimal arithmetic, to avoid introducing it frequently.

If you want native Math Operator, just set `SYSTEM` static member variable:

```js
// use native Math
Vector.SYSTEM = BaseOperatorSystem;
```

just simple and easy.

### customize operator system

Besides,in order to use more powerful arithmetic library （[decimal.js](https://github.com/MikeMcl/decimal.js/) or \[bignumber.js\](https://github.com/MikeMcl/bignumber.js/ or others）, you can customize operator system.

> See [here](https://github.com/MikeMcl/big.js/wiki) for some notes on the difference between them.

**First**, you must implements `IOperatorSystem`:

```js
export interface IOperatorSystem<T> {
  name: string;
  create: UnaryOperation<T>;
  sqrt: UnaryOperation<T>;
  abs: UnaryOperation<T>;
  plus: DualOperation<T>;
  minus: DualOperation<T>;
  divide: DualOperation<T>;
  multiply: DualOperation<T>;
  equal: (x: T, y: T) => boolean;
}
```

you can refer to built-in [operator-system/big.js](https://github.com/boycgit/maths-vector/blob/master/src/operator-system/big.js) for detail.

**Second**, set `SYSTEM` static variable.

For example:

```js
import { Decimal } from 'decimal.js';

class DecimalOperatorSystem extends BaseOperatorSystem {
  name = 'DecimalOperatorSystem';
  static create(x) {
    return new Decimal(x);
  }
  static plus(x, y) {
    return new Decimal(x).plus(y);
  }
  static minus(x, y) {
    return new Decimal(x).minus(y);
  }

  static divide(x, y) {
    return new Decimal(x).div(y);
  }

  static multiply(x, y) {
    return new Decimal(x).times(y);
  }

  static sqrt(x) {
    return new Decimal(x).sqrt();
  }
  static abs(x) {
    return new Decimal(x).abs();
  }

  static equal(x, y) {
    return new Decimal(x).eq(y);
  }
}
Vector.SYSTEM = DecimalOperatorSystem;
```