<a name="Vector"></a>
<script defer src="./api.js"></script>

## Vector {docsify-ignore}
Vector - 2D vector class for common vector operations, support [big.js](https://github.com/MikeMcl/big.js) for arbitrary-precision decimal arithmetic

**Kind**: global class  

* [Vector](#Vector)
    * [new Vector([x], [y])](#new_Vector_new)
    * _instance_
        * [.x](#Vector+x)
        * [.y](#Vector+y)
        * [.length](#Vector+length)
        * [.lengthSq](#Vector+lengthSq)
        * [.angle](#Vector+angle)
        * [.angleDegree](#Vector+angleDegree)
        * [.verticalAngle](#Vector+verticalAngle)
        * [.verticalAngleDegree](#Vector+verticalAngleDegree)
        * [.addX(vec)](#Vector+addX) ⇒ [<code>Vector</code>](#Vector)
        * [.addY(vec)](#Vector+addY) ⇒ [<code>Vector</code>](#Vector)
        * [.add(vec)](#Vector+add) ⇒ [<code>Vector</code>](#Vector)
        * [.subtractX(vec)](#Vector+subtractX) ⇒ [<code>Vector</code>](#Vector)
        * [.subtractY(vec)](#Vector+subtractY) ⇒ [<code>Vector</code>](#Vector)
        * [.subtract(vec)](#Vector+subtract) ⇒ [<code>Vector</code>](#Vector)
        * [.divideX(vec)](#Vector+divideX) ⇒ [<code>Vector</code>](#Vector)
        * [.divideY(vec)](#Vector+divideY) ⇒ [<code>Vector</code>](#Vector)
        * [.divide(vec)](#Vector+divide) ⇒ [<code>Vector</code>](#Vector)
        * [.multiplyX(vec)](#Vector+multiplyX) ⇒ [<code>Vector</code>](#Vector)
        * [.multiplyY(vec)](#Vector+multiplyY) ⇒ [<code>Vector</code>](#Vector)
        * [.multiply(vec)](#Vector+multiply) ⇒ [<code>Vector</code>](#Vector)
        * [.invertX()](#Vector+invertX) ⇒ [<code>Vector</code>](#Vector)
        * [.invertY()](#Vector+invertY) ⇒ [<code>Vector</code>](#Vector)
        * [.invert()](#Vector+invert) ⇒ [<code>Vector</code>](#Vector)
        * [.normalize()](#Vector+normalize) ⇒ [<code>Vector</code>](#Vector)
        * [.norm()](#Vector+norm)
        * [.rotate(angle)](#Vector+rotate)
        * [.rotateDegree(degree)](#Vector+rotateDegree)
        * [.dot(vec2)](#Vector+dot) ⇒ <code>Number</code>
        * [.cross(vec2)](#Vector+cross) ⇒ <code>Number</code>
        * [.projectOnto(vec2)](#Vector+projectOnto) ⇒ [<code>Vector</code>](#Vector)
        * [.cosAngleBetween(vec2)](#Vector+cosAngleBetween) ⇒ <code>Number</code>
        * [.angleBetween(vec2)](#Vector+angleBetween) ⇒ <code>Number</code>
        * [.distanceX(vec)](#Vector+distanceX) ⇒ <code>Number</code>
        * [.absDistanceX(vec)](#Vector+absDistanceX) ⇒ <code>Number</code>
        * [.distanceY(vec)](#Vector+distanceY) ⇒ <code>Number</code>
        * [.absDistanceY(vec)](#Vector+absDistanceY) ⇒ <code>Number</code>
        * [.distance(vec)](#Vector+distance) ⇒ <code>Number</code>
        * [.distanceSq(vec)](#Vector+distanceSq) ⇒ <code>Number</code>
        * [.isZero()](#Vector+isZero) ⇒ <code>Boolean</code>
        * [.isEqualTo()](#Vector+isEqualTo) ⇒ <code>Boolean</code>
        * [.toString()](#Vector+toString) ⇒ <code>String</code>
        * [.toArray()](#Vector+toArray) ⇒ <code>Array</code>
        * [.toObject()](#Vector+toObject) ⇒ <code>Object</code>
    * _static_
        * [.fromArray(arr)](#Vector.fromArray) ⇒ [<code>Vector</code>](#Vector)
        * [.fromObject(obj)](#Vector.fromObject) ⇒ [<code>Vector</code>](#Vector)

<a name="new_Vector_new"></a>

### new Vector([x], [y])
Constructor. Will also work without the `new` keyword


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>Number</code> | <code>0</code> | Value of the x axis |
| [y] | <code>Number</code> | <code>0</code> | Value of the y axis |

<a name="Vector+x"></a>

### vector.x
value for the X component

**Kind**: instance property of [<code>Vector</code>](#Vector)  
**Example**  
```js
var vec = new Vector(100, 50);
   vec.x; // 100
```
<a name="Vector+y"></a>

### vector.y
value for the Y component

**Kind**: instance property of [<code>Vector</code>](#Vector)  
**Example**  
```js
var vec = new Vector(100, 50);
   vec.y; // 50
```
<a name="Vector+length"></a>

### vector.length
length / magnitude of vector

**Kind**: instance property of [<code>Vector</code>](#Vector)  
**Access**: public  
**Read only**: true  
**Example**  
```js
var vec1 = Vector(3, 4);
    vec1.length; // 5
```
<a name="Vector+lengthSq"></a>

### vector.lengthSq
the squared length. If the length is only needed for comparison, this function is faster than length.

**Kind**: instance property of [<code>Vector</code>](#Vector)  
**Access**: public  
**Read only**: true  
<a name="Vector+angle"></a>

### vector.angle
the angle towards X in radians

**Kind**: instance property of [<code>Vector</code>](#Vector)  
**Access**: public  
**Read only**: true  
**Example**  
```js
var vec1 = Vector(1, 1);
    vec1.angle; // 0.785398 (Math.PI/4)
```
<a name="Vector+angleDegree"></a>

### vector.angleDegree
Same as `angle` but returns degrees

**Kind**: instance property of [<code>Vector</code>](#Vector)  
**Read only**: true  
**Example**  
```js
var vec1 = Vector(1, 1);
    vec1.angleDegree; // 45
```
<a name="Vector+verticalAngle"></a>

### vector.verticalAngle
Returns the angle towards Y in radians.

**Kind**: instance property of [<code>Vector</code>](#Vector)  
**Read only**: true  
**Example**  
```js
var vec1 = Vector(2, 1);
    vec1.verticalAngle; // 1.047197 (Math.PI/3)
```
<a name="Vector+verticalAngleDegree"></a>

### vector.verticalAngleDegree
Same as `verticalAngle` but returns degrees

**Kind**: instance property of [<code>Vector</code>](#Vector)  
**Read only**: true  
**Example**  
```js
var vec1 = Vector(2, 1);
    vec1.angleDegree; // 60
```
<a name="Vector+addX"></a>

### vector.addX(vec) ⇒ [<code>Vector</code>](#Vector)
Adds another vector's X axis or certain number to this one,

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number you want to add to this one, |

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

### vector.addY(vec) ⇒ [<code>Vector</code>](#Vector)
Adds another vector's Y axis or certain number to this one,

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number you want to add to this one, |

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

### vector.add(vec) ⇒ [<code>Vector</code>](#Vector)
Adds another vector or number to this one

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number you want to add to this one, |

**Example**  
```js
var vec1 = new Vector(10, 10);
    var vec2 = new Vector(20, 30);

    vec1.add(vec2).toString(); // notice vec1, vec2 is both immutable
    // => x:30, y:40
```
<a name="Vector+subtractX"></a>

### vector.subtractX(vec) ⇒ [<code>Vector</code>](#Vector)
minus another vector's X axis or certain number to this one,

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number you want to minus to this one, |

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

### vector.subtractY(vec) ⇒ [<code>Vector</code>](#Vector)
minus another vector's Y axis or certain number to this one,

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number you want to minus to this one, |

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

### vector.subtract(vec) ⇒ [<code>Vector</code>](#Vector)
minus another vector or certain number to this one,

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number you want to minus to this one, |

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

### vector.divideX(vec) ⇒ [<code>Vector</code>](#Vector)
Divides X axis by another vector's X axis or certain number

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number |

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

### vector.divideY(vec) ⇒ [<code>Vector</code>](#Vector)
Divides Y axis by another vector's Y axis or certain number

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number |

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

### vector.divide(vec) ⇒ [<code>Vector</code>](#Vector)
Divides by another vector's or certain number

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number |

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

### vector.multiplyX(vec) ⇒ [<code>Vector</code>](#Vector)
multiplies X axis by another vector's X axis or certain number

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number |

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

### vector.multiplyY(vec) ⇒ [<code>Vector</code>](#Vector)
multiplies Y axis by another vector's Y axis or certain number

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number |

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

### vector.multiply(vec) ⇒ [<code>Vector</code>](#Vector)
multiplies by another vector's or certain number

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The other vector or number |

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

### vector.invertX() ⇒ [<code>Vector</code>](#Vector)
inverts X axis

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Example**  
```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(2, 2);
    vec1.invertX().toString();
    // => x:-100, y:100
```
<a name="Vector+invertY"></a>

### vector.invertY() ⇒ [<code>Vector</code>](#Vector)
inverts Y axis

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Example**  
```js
var vec1 = new Vector(100, 50);
    vec1.invertY().toString();
    // => x:100, y:-50
```
<a name="Vector+invert"></a>

### vector.invert() ⇒ [<code>Vector</code>](#Vector)
inverts both axis

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Example**  
```js
var vec1 = new Vector(100, 50);
    vec1.invert().toString();
    // => x:-100, y:-50
```
<a name="Vector+normalize"></a>

### vector.normalize() ⇒ [<code>Vector</code>](#Vector)
Normalize to unit vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+norm"></a>

### vector.norm()
alais of normalize

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+rotate"></a>

### vector.rotate(angle)
Rotates the vector to a certain angle, in radians CCW from +X axis.

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | Number angle Angle in radians |

**Example**  
```js
var vec = new Vector(100, 0);
 vec.rotate(-Math.PI).toString(); // vec is immutable
 // => x: -100, y: 0
```
<a name="Vector+rotateDegree"></a>

### vector.rotateDegree(degree)
Same as rotate but uses degrees

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>Number</code> | Number angle Angle in radians |

**Example**  
```js
var vec = new Vector(100, 0);
 vec.rotate(90).toString(); // vec is immutable
 // => x: 0, y: 100
```
<a name="Vector+dot"></a>

### vector.dot(vec2) ⇒ <code>Number</code>
Calculates the dot product of this vector and another

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Number</code> - - dot product  

| Param | Type | Description |
| --- | --- | --- |
| vec2 | [<code>Vector</code>](#Vector) | The second vector |

**Example**  
```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.dot(vec2).toString();
    // => 23000
```
<a name="Vector+cross"></a>

### vector.cross(vec2) ⇒ <code>Number</code>
Calculates the cross product of this vector and another
在3D图像学中，叉乘的概念非常有用，可以通过两个向量的叉乘，生成第三个垂直于a，b的法向量，从而构建X、Y、Z坐标系
在二维空间中，叉乘还有另外一个几何意义就是：aXb等于由向量a和向量b构成的平行四边形的面积；
定义向量a、b，当aXb<0时（X就表示叉乘），b对应的线段在a的顺时针方向；当aXb=0时，a、b共线；当aXb>0时，b在a的逆时针方向。（注意：aXb=-bXa，因此判断时要注意顺序）

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Number</code> - - cross product  

| Param | Type | Description |
| --- | --- | --- |
| vec2 | [<code>Vector</code>](#Vector) | The second vector |

**Example**  
```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.cross(vec2).toString();
    // => -4000
```
<a name="Vector+projectOnto"></a>

### vector.projectOnto(vec2) ⇒ [<code>Vector</code>](#Vector)
Projects a vector onto another vector, setting itself to the result.

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type |
| --- | --- |
| vec2 | [<code>Vector</code>](#Vector) | 

**Example**  
```js
var vec = new Vector(100, 0);
    var vec2 = new Vector(100, 100);
    vec.projectOnto(vec2).toString();
    // => x:50, y:50
```
<a name="Vector+cosAngleBetween"></a>

### vector.cosAngleBetween(vec2) ⇒ <code>Number</code>
get cos angle between of two angle

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Number</code> - - cos value of angle  

| Param | Type |
| --- | --- |
| vec2 | [<code>Vector</code>](#Vector) | 

**Example**  
```js
var vec = new Vector(1, 1);
    var vec2 = new Vector(1, 1);
    vec.cosAngleBetween(vec2).toString();
    // => 1
```
<a name="Vector+angleBetween"></a>

### vector.angleBetween(vec2) ⇒ <code>Number</code>
get angle between of two vector， in radians CCW

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Number</code> - - angle between of two vector  

| Param | Type |
| --- | --- |
| vec2 | [<code>Vector</code>](#Vector) | 

**Example**  
```js
var vec = new Vector(1, 0);
    var vec2 = new Vector(1, 1);
    vec.angleBetween(vec2).toString();
    // => PI / 4
```
<a name="Vector+distanceX"></a>

### vector.distanceX(vec) ⇒ <code>Number</code>
Calculates the distance of the X axis between this vector and another

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Number</code> - - Distance  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The second vector |

**Example**  
```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.distanceX(vec2);
    // => -100
```
<a name="Vector+absDistanceX"></a>

### vector.absDistanceX(vec) ⇒ <code>Number</code>
Same as `distanceX()` but always returns an absolute number

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Number</code> - - Absolute Distance  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The second vector |

**Example**  
```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.absDistanceX(vec2);
    // => 100
```
<a name="Vector+distanceY"></a>

### vector.distanceY(vec) ⇒ <code>Number</code>
Calculates the distance of the Y axis between this vector and another

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Number</code> - - Distance  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The second vector |

**Example**  
```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.distanceY(vec2);
    // => -100
```
<a name="Vector+absDistanceY"></a>

### vector.absDistanceY(vec) ⇒ <code>Number</code>
Same as `distanceY()` but always returns an absolute number

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Number</code> - - Absolute Distance  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The second vector |

**Example**  
```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.absDistanceY(vec2);
    // => 100
```
<a name="Vector+distance"></a>

### vector.distance(vec) ⇒ <code>Number</code>
Calculates euclidean distance between this vector and another

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Number</code> - Distance  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The second vector |

**Example**  
```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.distance(vec2);
    // => 10100
```
<a name="Vector+distanceSq"></a>

### vector.distanceSq(vec) ⇒ <code>Number</code>
Calculates the squared euclidean distance between this vector and another
If the distance is only needed for comparison, this function is faster than  `distance`.

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Number</code> - Distance  

| Param | Type | Description |
| --- | --- | --- |
| vec | [<code>Vector</code>](#Vector) | The second vector |

**Example**  
```js
var vec1 = new Vector(100, 50);
    var vec2 = new Vector(200, 60);

    vec1.distanceSq(vec2);
    // => 10100
```
<a name="Vector+isZero"></a>

### vector.isZero() ⇒ <code>Boolean</code>
Returns a true if vector is (0, 0)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>Boolean</code> - -  
**Example**  
```js
var vec = new Victor();
    vec.isZero();
    // => true
```
<a name="Vector+isEqualTo"></a>

### vector.isEqualTo() ⇒ <code>Boolean</code>
Returns a true if this vector is the same as another

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Example**  
```js
var vec1 = new Victor(100, 50);
    var vec2 = new Victor(100, 50);
    vec1.isEqualTo(vec2);

    // => true
```
<a name="Vector+toString"></a>

### vector.toString() ⇒ <code>String</code>
Returns an string representation of the vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Example**  
```js
var vec = new Victor(10, 20);
    vec.toString();

    // => x:10, y:20
```
<a name="Vector+toArray"></a>

### vector.toArray() ⇒ <code>Array</code>
Returns an array representation of the vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Example**  
```js
var vec = new Victor(10, 20);
    vec.toArray();
    // => [10, 20]
```
<a name="Vector+toObject"></a>

### vector.toObject() ⇒ <code>Object</code>
Returns an object representation of the vector

### Examples:

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Example**  
```js
var vec = new Victor(10, 20);

    vec.toObject();
    // => { x: 10, y: 20 }
```
<a name="Vector.fromArray"></a>

### Vector.fromArray(arr) ⇒ [<code>Vector</code>](#Vector)
Creates a new instance from an array

**Kind**: static method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | Array with the x and y values at index 0 and 1 respectively |

**Example**  
```js
var vec = Vector.fromArray([42, 21]);

    vec.toString();
    // => x:42, y:21
```
<a name="Vector.fromObject"></a>

### Vector.fromObject(obj) ⇒ [<code>Vector</code>](#Vector)
Creates a new instance from an object

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new instance  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object with the values for x and y |

**Example**  
```js
var vec = Vector.fromObject({ x: 42, y: 21 });

    vec.toString();
    // => x:42, y:21
```
