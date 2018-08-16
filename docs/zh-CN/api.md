<a name="Vector"></a>
<script defer src="./api.js"></script>

## Vector {docsify-ignore}

Vector - 提供 2D 向量（vector）计算能力的工具类，内置 [big.js](https://github.com/MikeMcl/big.js)，支持任意精度的十进制算术

**Kind**: global class

* [Vector](#Vector) 
    * [new Vector([x], [y])](#new_Vector_new)
    * *instance* 
        * [.x](#Vector+x)
        * [.y](#Vector+y)
        * [.length](#Vector+length)
        * [.lengthSq](#Vector+lengthSq)
        * [.angle](#Vector+angle)
        * [.angleDegree](#Vector+angleDegree)
        * [.verticalAngle](#Vector+verticalAngle)
        * [.verticalAngleDegree](#Vector+verticalAngleDegree)
        * [.addX(vec)](#Vector+addX) ⇒ [`Vector`](#Vector)
        * [.addY(vec)](#Vector+addY) ⇒ [`Vector`](#Vector)
        * [.add(vec)](#Vector+add) ⇒ [`Vector`](#Vector)
        * [.subtractX(vec)](#Vector+subtractX) ⇒ [`Vector`](#Vector)
        * [.subtractY(vec)](#Vector+subtractY) ⇒ [`Vector`](#Vector)
        * [.subtract(vec)](#Vector+subtract) ⇒ [`Vector`](#Vector)
        * [.divideX(vec)](#Vector+divideX) ⇒ [`Vector`](#Vector)
        * [.divideY(vec)](#Vector+divideY) ⇒ [`Vector`](#Vector)
        * [.divide(vec)](#Vector+divide) ⇒ [`Vector`](#Vector)
        * [.multiplyX(vec)](#Vector+multiplyX) ⇒ [`Vector`](#Vector)
        * [.multiplyY(vec)](#Vector+multiplyY) ⇒ [`Vector`](#Vector)
        * [.multiply(vec)](#Vector+multiply) ⇒ [`Vector`](#Vector)
        * [.invertX()](#Vector+invertX) ⇒ [`Vector`](#Vector)
        * [.invertY()](#Vector+invertY) ⇒ [`Vector`](#Vector)
        * [.invert()](#Vector+invert) ⇒ [`Vector`](#Vector)
        * [.normalize()](#Vector+normalize) ⇒ [`Vector`](#Vector)
        * [.norm()](#Vector+norm)
        * [.rotate(angle)](#Vector+rotate)
        * [.rotateDegree(degree)](#Vector+rotateDegree)
        * [.dot(vec2)](#Vector+dot) ⇒ `Number`
        * [.cross(vec2)](#Vector+cross) ⇒ `Number`
        * [.projectOnto(vec2)](#Vector+projectOnto) ⇒ [`Vector`](#Vector)
        * [.cosAngleBetween(vec2)](#Vector+cosAngleBetween) ⇒ `Number`
        * [.angleBetween(vec2)](#Vector+angleBetween) ⇒ `Number`
        * [.distanceX(vec)](#Vector+distanceX) ⇒ `Number`
        * [.absDistanceX(vec)](#Vector+absDistanceX) ⇒ `Number`
        * [.distanceY(vec)](#Vector+distanceY) ⇒ `Number`
        * [.absDistanceY(vec)](#Vector+absDistanceY) ⇒ `Number`
        * [.distance(vec)](#Vector+distance) ⇒ `Number`
        * [.distanceSq(vec)](#Vector+distanceSq) ⇒ `Number`
        * [.isZero()](#Vector+isZero) ⇒ `Boolean`
        * [.isEqualTo()](#Vector+isEqualTo) ⇒ `Boolean`
        * [.toString()](#Vector+toString) ⇒ `String`
        * [.toArray()](#Vector+toArray) ⇒ `Array`
        * [.toObject()](#Vector+toObject) ⇒ `Object`
    * *static* 
        * [.fromArray(arr)](#Vector.fromArray) ⇒ [`Vector`](#Vector)
        * [.fromObject(obj)](#Vector.fromObject) ⇒ [`Vector`](#Vector)

<a name="new_Vector_new"></a>

### new Vector([x], [y])

构造函数 Will also work without the `new` keyword

| Param | Type     | Default | Description |
| ----- | -------- | ------- | ----------- |
| [x]   | `Number` | `0`     | X 轴数值       |
| [y]   | `Number` | `0`     | Y 轴数值       |

<a name="Vector+x"></a>

### vector.x

x 轴数值

**Kind**: instance property of [`Vector`](#Vector)  
**Example**

```js
var vec = new Vector(100, 50);
   vec.x; // 100
```

<a name="Vector+y"></a>

### vector.y

y 轴数值

**Kind**: instance property of [`Vector`](#Vector)  
**Example**

```js
var vec = new Vector(100, 50);
   vec.y; // 50
```

<a name="Vector+length"></a>

### vector.length

向量长度

**Kind**: instance property of [`Vector`](#Vector)  
**Access**: public  
**Read only**: true  
**Example**

```js
var vec1 = Vector(3, 4);
    vec1.length; // 5
```

<a name="Vector+lengthSq"></a>

### vector.lengthSq

长度的平方数值 如果你仅仅是想要比较两个向量的长度数值，该函数运算速度快于 `length`

**Kind**: instance property of [`Vector`](#Vector)  
**Access**: public  
**Read only**: true  
<a name="Vector+angle"></a>

### vector.angle

偏离 X 轴的弧度

**Kind**: instance property of [`Vector`](#Vector)  
**Access**: public  
**Read only**: true  
**Example**

```js
var vec1 = Vector(1, 1);
    vec1.angle; // 0.785398 (Math.PI/4)
```

<a name="Vector+angleDegree"></a>

### vector.angleDegree

功能和 `angle` 相似，返回以度数单位的角度值

**Kind**: instance property of [`Vector`](#Vector)  
**Read only**: true  
**Example**

```js
var vec1 = Vector(1, 1);
    vec1.angleDegree; // 45
```

<a name="Vector+verticalAngle"></a>

### vector.verticalAngle

偏离 Y 轴的弧度

**Kind**: instance property of [`Vector`](#Vector)  
**Read only**: true  
**Example**

```js
var vec1 = Vector(2, 1);
    vec1.verticalAngle; // 1.047197 (Math.PI/3)
```

<a name="Vector+verticalAngleDegree"></a>

### vector.verticalAngleDegree

功能和 `verticalAngle` 相似，返回以度数单位的角度值

**Kind**: instance property of [`Vector`](#Vector)  
**Read only**: true  
**Example**

```js
var vec1 = Vector(2, 1);
    vec1.angleDegree; // 60
```

<a name="Vector+addX"></a>

### vector.addX(vec) ⇒ [`Vector`](#Vector)

将当前向量的 x 轴数值与某个数值或另一个向量的 x 轴数值相加，返回运算后的新向量

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                                             |
| ----- | ------------------- | ------------------------------------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number you want to add to this one, |

**Example**

```js
var vec1 = new Vector(10, 10);
    var vec2 = new Vector(20, 30);
    vec1.addX(vec2).toString();
    // => x:30, y:10

    vec1.addX(40).toString(); // notice vec1 is immutable
    // => x:50, y:10
```

<a name="Vector+addY"></a>

### vector.addY(vec) ⇒ [`Vector`](#Vector)

将当前向量的 y 轴数值与某个数值或另一个向量的 y 轴数值相加，返回运算后的新向量

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                                             |
| ----- | ------------------- | ------------------------------------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number you want to add to this one, |

**Example**

```js
var vec1 = new Vector(10, 10);
    var vec2 = new Vector(20, 30);
    vec1.addY(vec2).toString();
    // => x:10, y:40

    vec1.addY(40).toString(); // notice vec1 is immutable
    // => x:10, y:50
```

<a name="Vector+add"></a>

### vector.add(vec) ⇒ [`Vector`](#Vector)

将当前向量与某个数值或另一个向量相加，返回运算后的新向量

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                                             |
| ----- | ------------------- | ------------------------------------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number you want to add to this one, |

**Example**

```js
var vec1 = new Vector(10, 10);
    var vec2 = new Vector(20, 30);

    vec1.add(vec2).toString(); // notice vec1, vec2 is both immutable
    // => x:30, y:40
```

<a name="Vector+subtractX"></a>

### vector.subtractX(vec) ⇒ [`Vector`](#Vector)

将当前向量的 x 轴数值与某个数值或另一个向量的 x 轴数值相减，返回运算后的新向量

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                                               |
| ----- | ------------------- | --------------------------------------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number you want to minus to this one, |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(20, 30);
    vec1.subtractX(vec2).toString();
    // => x:80, y:50

    vec1.subtractX(40).toString(); // notice vec1 is immutable
    // => x:60, y:10
```

<a name="Vector+subtractY"></a>

### vector.subtractY(vec) ⇒ [`Vector`](#Vector)

将当前向量的 y 轴数值与某个数值或另一个向量的 y 轴数值相减，返回运算后的新向量

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                                               |
| ----- | ------------------- | --------------------------------------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number you want to minus to this one, |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(20, 30);
    vec1.subtractY(vec2).toString();
    // => x:100, y:20

    vec1.subtractY(40).toString(); // notice vec1 is immutable
    // => x:100, y:10
```

<a name="Vector+subtract"></a>

### vector.subtract(vec) ⇒ [`Vector`](#Vector)

将当前向量与某个数值或另一个向量相减，返回运算后的新向量,

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                                               |
| ----- | ------------------- | --------------------------------------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number you want to minus to this one, |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(20, 30);
    vec1.subtract(vec2).toString();
    // => x:80, y:20

    vec1.subtract(40).toString(); // notice vec1 is immutable
    // => x:60, y:10
```

<a name="Vector+divideX"></a>

### vector.divideX(vec) ⇒ [`Vector`](#Vector)

将当前向量的 x 轴数值与某个数值或另一个向量的 x 轴数值相除，返回运算后的新向量

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(2, 2);
    vec1.divideX(vec2).toString();
    // => x:50, y:50

    vec1.divideX(4).toString(); // notice vec1 is immutable
    // => x:25, y:50
```

<a name="Vector+divideY"></a>

### vector.divideY(vec) ⇒ [`Vector`](#Vector)

将当前向量的 y 轴数值与某个数值或另一个向量的 y 轴数值相除，返回运算后的新向量

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(2, 2);
    vec1.divideY(vec2).toString();
    // => x:100, y:25

    vec1.divideY(4).toString(); // notice vec1 is immutable
    // => x:100, y:12.5
```

<a name="Vector+divide"></a>

### vector.divide(vec) ⇒ [`Vector`](#Vector)

将当前向量与某个数值或另一个向量相除，返回运算后的新向量,

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(2, 2);
    vec1.divide(vec2).toString();
    // => x:50, y:25

    vec1.divide(4).toString(); // notice vec1 is immutable
    // => x:25, y:12.5
```

<a name="Vector+multiplyX"></a>

### vector.multiplyX(vec) ⇒ [`Vector`](#Vector)

将当前向量的 x 轴数值与某个数值或另一个向量的 x 轴数值相乘，返回运算后的新向量

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(2, 2);
    vec1.multiplyX(vec2).toString();
    // => x:200, y:50

    vec1.multiplyX(4).toString(); // notice vec1 is immutable
    // => x:400, y:10
```

<a name="Vector+multiplyY"></a>

### vector.multiplyY(vec) ⇒ [`Vector`](#Vector)

将当前向量的 y 轴数值与某个数值或另一个向量的 y 轴数值相乘，返回运算后的新向量

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(2, 2);
    vec1.multiplyY(vec2).toString();
    // => x:100, y:100

    vec1.multiplyY(4).toString(); // notice vec1 is immutable
    // => x:100, y:200
```

<a name="Vector+multiply"></a>

### vector.multiply(vec) ⇒ [`Vector`](#Vector)

将当前向量与某个数值或另一个向量相乘，返回运算后的新向量,

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| vec   | [`Vector`](#Vector) | The other vector or number |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(2, 2);
    vec1.multiply(vec2).toString();
    // => x:200, y:100

    vec1.multiply(4).toString(); // notice vec1 is immutable
    // => x:400, y:200
```

<a name="Vector+invertX"></a>

### vector.invertX() ⇒ [`Vector`](#Vector)

x 轴取反，返回新向量

**Kind**: instance method of [`Vector`](#Vector)  
**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(2, 2);
    vec1.invertX().toString();
    // => x:-100, y:100
```

<a name="Vector+invertY"></a>

### vector.invertY() ⇒ [`Vector`](#Vector)

y 轴取反，返回新向量

**Kind**: instance method of [`Vector`](#Vector)  
**Example**

```js
var vec1 = new Vector(100, 50);
    vec1.invertY().toString();
    // => x:100, y:-50
```

<a name="Vector+invert"></a>

### vector.invert() ⇒ [`Vector`](#Vector)

x、y 轴取反，返回新向量

**Kind**: instance method of [`Vector`](#Vector)  
**Example**

```js
var vec1 = new Vector(100, 50);
    vec1.invert().toString();
    // => x:-100, y:-50
```

<a name="Vector+normalize"></a>

### vector.normalize() ⇒ [`Vector`](#Vector)

归一化成单位向量

**Kind**: instance method of [`Vector`](#Vector)  
<a name="Vector+norm"></a>

### vector.norm()

normalize 函数的别名

**Kind**: instance method of [`Vector`](#Vector)  
<a name="Vector+rotate"></a>

### vector.rotate(angle)

将当前向量逆时针旋转 angle 弧度

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type     | Description                   |
| ----- | -------- | ----------------------------- |
| angle | `Number` | Number angle Angle in radians |

**Example**

```js
var vec = new Vector(100, 0);
 vec.rotate(-Math.PI).toString(); // vec is immutable
 // => x: -100, y: 0
```

<a name="Vector+rotateDegree"></a>

### vector.rotateDegree(degree)

与 `rotate` 方法相同, 但使用度数作为单位

**Kind**: instance method of [`Vector`](#Vector)

| Param  | Type     | Description                   |
| ------ | -------- | ----------------------------- |
| degree | `Number` | Number angle Angle in radians |

**Example**

```js
var vec = new Vector(100, 0);
 vec.rotate(90).toString(); // vec is immutable
 // => x: 0, y: 100
```

<a name="Vector+dot"></a>

### vector.dot(vec2) ⇒ `Number`

计算当前向量和另一个向量的点积数值

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Number` - - dot product

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| vec2  | [`Vector`](#Vector) | The second vector |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.dot(vec2).toString();
    // => 23000
```

<a name="Vector+cross"></a>

### vector.cross(vec2) ⇒ `Number`

计算当前向量和另一个向量叉乘的数值；在3D图像学中，叉乘的概念非常有用，可以通过两个向量的叉乘，生成第三个垂直于a，b的法向量，从而构建X、Y、Z坐标系 在二维空间中，叉乘还有另外一个几何意义就是：aXb等于由向量a和向量b构成的平行四边形的面积； 定义向量a、b，当aXb<0时（X就表示叉乘），b对应的线段在a的顺时针方向；当aXb=0时，a、b共线；当aXb>0时，b在a的逆时针方向。（注意：aXb=-bXa，因此判断时要注意顺序）

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Number` - - cross product

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| vec2  | [`Vector`](#Vector) | The second vector |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.cross(vec2).toString();
    // => -4000
```

<a name="Vector+projectOnto"></a>

### vector.projectOnto(vec2) ⇒ [`Vector`](#Vector)

将当前向量投影到另一个向量上获得的新向量

**Kind**: instance method of [`Vector`](#Vector)

| Param | Type                |
| ----- | ------------------- |
| vec2  | [`Vector`](#Vector) |

**Example**

```js
var vec = new Vector(100, 0);
    var vec2 = new Vector(100, 100);
    vec.projectOnto(vec2).toString();
    // => x:50, y:50
```

<a name="Vector+cosAngleBetween"></a>

### vector.cosAngleBetween(vec2) ⇒ `Number`

获取两个向量交角的 cos 数值

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Number` - - cos value of angle

| Param | Type                |
| ----- | ------------------- |
| vec2  | [`Vector`](#Vector) |

**Example**

```js
var vec = new Vector(1, 1);
    var vec2 = new Vector(1, 1);
    vec.cosAngleBetween(vec2).toString();
    // => 1
```

<a name="Vector+angleBetween"></a>

### vector.angleBetween(vec2) ⇒ `Number`

获取两个向量的弧度值

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Number` - - angle between of two vector

| Param | Type                |
| ----- | ------------------- |
| vec2  | [`Vector`](#Vector) |

**Example**

```js
var vec = new Vector(1, 0);
    var vec2 = new Vector(1, 1);
    vec.angleBetween(vec2).toString();
    // => PI / 4
```

<a name="Vector+distanceX"></a>

### vector.distanceX(vec) ⇒ `Number`

计算此向量与另一个向量之间的 X 轴距离

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Number` - - Distance

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| vec   | [`Vector`](#Vector) | The second vector |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.distanceX(vec2);
    // => -100
```

<a name="Vector+absDistanceX"></a>

### vector.absDistanceX(vec) ⇒ `Number`

与 `distanceX` 功能相同, 但返回绝对值

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Number` - - Absolute Distance

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| vec   | [`Vector`](#Vector) | The second vector |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.absDistanceX(vec2);
    // => 100
```

<a name="Vector+distanceY"></a>

### vector.distanceY(vec) ⇒ `Number`

计算此向量与另一个向量之间的 Y 轴距离

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Number` - - Distance

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| vec   | [`Vector`](#Vector) | The second vector |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.distanceY(vec2);
    // => -100
```

<a name="Vector+absDistanceY"></a>

### vector.absDistanceY(vec) ⇒ `Number`

与 `distanceY` 功能相同, 但返回绝对值

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Number` - - Absolute Distance

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| vec   | [`Vector`](#Vector) | The second vector |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.absDistanceY(vec2);
    // => 100
```

<a name="Vector+distance"></a>

### vector.distance(vec) ⇒ `Number`

计算此向量与另一个向量之间的距离

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Number` - Distance

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| vec   | [`Vector`](#Vector) | The second vector |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.distance(vec2);
    // => 10100
```

<a name="Vector+distanceSq"></a>

### vector.distanceSq(vec) ⇒ `Number`

计算两个向量之间的欧式距离的平方值，如果你对比距离长短，使用该函数速度会比 `distance` 快

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Number` - Distance

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| vec   | [`Vector`](#Vector) | The second vector |

**Example**

```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.distanceSq(vec2);
    // => 10100
```

<a name="Vector+isZero"></a>

### vector.isZero() ⇒ `Boolean`

如果 vector 是 (0,0)，则返回 true

**Kind**: instance method of [`Vector`](#Vector)  
**Returns**: `Boolean` - -  
**Example**

```js
var vec = new Victor();
    vec.isZero();
    // => true
```

<a name="Vector+isEqualTo"></a>

### vector.isEqualTo() ⇒ `Boolean`

如果两向量数值相同，则返回 true

**Kind**: instance method of [`Vector`](#Vector)  
**Example**

```js
var vec1 = new Victor(100, 50);
    var vec2 = new Victor(100, 50);
    vec1.isEqualTo(vec2);

    // => true
```

<a name="Vector+toString"></a>

### vector.toString() ⇒ `String`

返回向量的字符串形式

**Kind**: instance method of [`Vector`](#Vector)  
**Example**

```js
var vec = new Victor(10, 20);
    vec.toString();

    // => x:10, y:20
```

<a name="Vector+toArray"></a>

### vector.toArray() ⇒ `Array`

将向量转换成 array 数据格式

**Kind**: instance method of [`Vector`](#Vector)  
**Example**

```js
var vec = new Victor(10, 20);
    vec.toArray();
    // => [10, 20]
```

<a name="Vector+toObject"></a>

### vector.toObject() ⇒ `Object`

将向量转换成对象形式

### Examples:

**Kind**: instance method of [`Vector`](#Vector)  
**Example**

```js
var vec = new Victor(10, 20);

    vec.toObject();
    // => { x: 10, y: 20 }
```

<a name="Vector.fromArray"></a>

### Vector.fromArray(arr) ⇒ [`Vector`](#Vector)

根据数组创建新的向量实例

**Kind**: static method of [`Vector`](#Vector)

| Param | Type    | Description                                                 |
| ----- | ------- | ----------------------------------------------------------- |
| arr   | `Array` | Array with the x and y values at index 0 and 1 respectively |

**Example**

```js
var vec = Vector.fromArray([42, 21]);

    vec.toString();
    // => x:42, y:21
```

<a name="Vector.fromObject"></a>

### Vector.fromObject(obj) ⇒ [`Vector`](#Vector)

根据对象创建新的向量实例

**Kind**: static method of [`Vector`](#Vector)  
**Returns**: [`Vector`](#Vector) - - The new instance

| Param | Type     | Description                        |
| ----- | -------- | ---------------------------------- |
| obj   | `Object` | Object with the values for x and y |

**Example**

```js
var vec = Vector.fromObject({ x: 42, y: 21 });

    vec.toString();
    // => x:42, y:21
```