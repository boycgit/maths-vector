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

按照数学标准, 例如, 两个向量不支持直接的 `multiply` 和 `divide` 操作, 但在程序中就可以直接应用于两个向量:

```js
v1.multiply(v2).toString(); // x:3, y:8
v1.divide(v2).toString(); // x: 0.3333, y:0.5
```

该库还提供线性代数数学, 比如 `dot`、`prudction`、`cross` 、distance 操作:

```js
var v1 = new Vector(1, 2);
var v2 = new Vector(3, 4);
v1.dot(v2).toString(); //  11
v1.cross(v2).toString(); // -2
v1.distance(v2).toString(); // 2.8284
```

此外还提供 `projectOnto`、`normalize`、`rotate` 等方法，更多相信内容请移步 [API 文档](/api/)

## 更改算术操作体系

### 内置算术操作体系

众所周知, JavaScript 中的数字有一些有趣的结果, 如果你习惯于 C 或 Java 中的数学, 那么你必须对 Js 中的算术运算要保持谨慎。

> 有关 JavaScript 中算术运算问题，可参考 [这篇文章](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Numbers)

如果需要任意精度的十进制算术运算, 推荐使用第三方库, 例如 [big.js](http://mikemcl.github.io/big.js/)、[bignumber.js](https://github.com/MikeMcl/bignumber.js/)、[decimal.js](https://github.com/MikeMcl/decimal.js/) 等;

为此, 此库默认内置了 [big.js](http://mikemcl.github.io/big.js/) (仅 5.9 KB 缩小) 这个工具库, 方便您进行任意精度的十进制算术, 避免频繁地引入它。

当然，如果你想要 JavaScript 内置的 Math 操作体系，只需要设置 `SYSTEM` 这个静态变量即可：

```js
// use native Math
Vector.SYSTEM = BaseOperatorSystem;
```

就这么简单容易

### 自定义算术操作体系

除了上述内置的算术操作体系之外，你可以自定义使用任何其他强大的算术库（[decimal.js](https://github.com/MikeMcl/decimal.js/) 、 \[bignumber.js\](https://github.com/MikeMcl/bignumber.js/ 或者其他）：

> 有关它们之间的差异的一些注释, 请参见 [here](https://github.com/MikeMcl/big.js/wiki)。

**首先**, 必须实现 `IOperatorSystem` 接口:

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

内置的 [operator-system/big.js](https://github.com/boycgit/maths-vector/blob/master/src/operator-system/big.js) 文件可以为你提供参考写法

**其次**, 设置 ` SYSTEM ` 静态变量。

举例如下：

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