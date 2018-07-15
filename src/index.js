import OperatorSystem, { BigOperatorSystem } from './operator-system';
/**
 * Vector - 2D vector class for common vector operations, support [big.js](https://github.com/MikeMcl/big.js) for arbitrary-precision decimal arithmetic
 */

class Vector {
  // 设置默认算术体系，默认采用 大数 算术体系
  static SYSTEM = BigOperatorSystem;
  static isVector(vec) {
    return vec instanceof Vector;
  }

  // 每个实例对应的操作体系
  operatorSystem = Vector.SYSTEM;

  config({ system = BigOperatorSystem }) {
    if (typeof system === 'string') {
      this.operatorSystem = OperatorSystem[system] || Vector.SYSTEM;
    } else {
      this.operatorSystem = system;
    }
  }

  /**
   * Constructor. Will also work without the `new` keyword
   *
   * @param {Number} [x=0] - Value of the x axis
   * @param {Number} [y=0] - Value of the y axis
   * @return {Vector}
   * @example
   *     var vec1 = new Vector(100, 50);
   *     var vec2 = Vector(42, 1337);
   */
  constructor(x = 0, y = 0) {
    // 默认采用大数操作
    this.config({ system: 'big' });
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x.toString();
  }
  set x(v) {
    this._x = this.operatorSystem.create(x);
  }
  get y() {
    return this._y.toString();
  }
  set x(y) {
    this._y = this.operatorSystem.create(v);
  }

  /**
   * Creates a new instance from an array
   * @static
   * @param {Array} arr - Array with the x and y values at index 0 and 1 respectively
   * @returns {Vector}
   * @memberof Vector
   * @example
   *    var vec = Vector.fromArray([42, 21]);
   *
   *     vec.toString();
   *     // => x:42, y:21
   */
  static fromArray(arr) {
    return new Vector(arr[0] || 0, arr[1] || 0);
  }

  /**
   * Creates a new instance from an object
   *
   * @static
   * @param {Object} obj - Object with the values for x and y
   * @returns {Vector} - The new instance
   * @memberof Vector
   * @example
   *     var vec = Vector.fromObject({ x: 42, y: 21 });
   *
   *     vec.toString();
   *     // => x:42, y:21
   *
   */
  static fromObject(obj) {
    return new Vector(obj.x || 0, obj.y || 0);
  }

  /**
   * # Manipulation
   *
   * These functions are chainable.
   */

  /**
   * Adds another vector's X axis or certain number to this one,
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number you want to add to this one,
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(10, 10);
   *     var vec2 = new Vector(20, 30);
   *     vec1.addX(vec2).toString();
   *     // => x:30, y:10
   *
   *     vec1.addX(40).toString(); // notice vec1 is immutable
   *     // => x:50, y:10
   */
  addX(vec) {
    const { isVector } = Vector;
    const { plus } = this.operatorSystem;
    const targetX = plus(this.x, isVector(vec) ? vec.x : vec);
    return new Vector(targetX, this.y);
  }

  /**
   * Adds another vector's Y axis or certain number to this one,
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number you want to add to this one,
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(10, 10);
   *     var vec2 = new Vector(20, 30);
   *     vec1.addY(vec2).toString();
   *     // => x:10, y:40
   *
   *     vec1.addY(40).toString(); // notice vec1 is immutable
   *     // => x:10, y:50
   */
  addY(vec) {
    const { isVector } = Vector;
    const { plus } = this.operatorSystem;
    const targetY = plus(this.y, isVector(vec) ? vec.y : vec);
    return new Vector(this.x, targetY);
  }

  /**
   * Adds another vector or number to this one
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number you want to add to this one,
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(10, 10);
   *     var vec2 = new Vector(20, 30);
   *
   *     vec1.add(vec2).toString(); // notice vec1, vec2 is both immutable
   *     // => x:30, y:40
   *
   */
  add(vec) {
    return this.addX(vec).addY(vec); // operator is chainable
  }

  /**
   * minus another vector's X axis or certain number to this one,
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number you want to minus to this one,
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(100, 50);
   *     var vec2 = new Vector(20, 30);
   *     vec1.subtractX(vec2).toString();
   *     // => x:80, y:50
   *
   *     vec1.subtractX(40).toString(); // notice vec1 is immutable
   *     // => x:60, y:10
   */
  subtractX(vec) {
    const { isVector } = Vector;
    const { minus } = this.operatorSystem;
    const targetX = minus(this.x, isVector(vec) ? vec.x : vec);
    return new Vector(targetX, this.y);
  }

  /**
   * minus another vector's Y axis or certain number to this one,
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number you want to minus to this one,
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(100, 50);
   *     var vec2 = new Vector(20, 30);
   *     vec1.subtractY(vec2).toString();
   *     // => x:100, y:20
   *
   *     vec1.subtractY(40).toString(); // notice vec1 is immutable
   *     // => x:100, y:10
   */
  subtractY(vec) {
    const { isVector } = Vector;
    const { minus } = this.operatorSystem;
    const targetY = minus(this.y, isVector(vec) ? vec.y : vec);
    return new Vector(this.x, targetY);
  }

  /**
   * minus another vector or certain number to this one,
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number you want to minus to this one,
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(100, 50);
   *     var vec2 = new Vector(20, 30);
   *     vec1.subtract(vec2).toString();
   *     // => x:80, y:20
   *
   *     vec1.subtract(40).toString(); // notice vec1 is immutable
   *     // => x:60, y:10
   */
  subtract(vec) {
    return this.subtractX(vec).subtractY(vec); // operator is chainable
  }

  /**
   * Divides X axis by another vector's X axis or certain number
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(100, 50);
   *     var vec2 = new Vector(2, 2);
   *     vec1.divideX(vec2).toString();
   *     // => x:50, y:50
   *
   *     vec1.divideX(4).toString(); // notice vec1 is immutable
   *     // => x:25, y:50
   */
  divideX(vec) {
    const { isVector } = Vector;
    const { divide } = this.operatorSystem;
    const targetX = divide(this.x, isVector(vec) ? vec.x : vec);
    return new Vector(targetX, this.y);
  }

  /**
   * Divides Y axis by another vector's Y axis or certain number
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(100, 50);
   *     var vec2 = new Vector(2, 2);
   *     vec1.divideY(vec2).toString();
   *     // => x:100, y:25
   *
   *     vec1.divideY(4).toString(); // notice vec1 is immutable
   *     // => x:100, y:12.5
   */
  divideY(vec) {
    const { isVector } = Vector;
    const { divide } = this.operatorSystem;
    const targetY = divide(this.y, isVector(vec) ? vec.y : vec);
    return new Vector(this.x, targetY);
  }

  /**
   * Divides by another vector's or certain number
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(100, 50);
   *     var vec2 = new Vector(2, 2);
   *     vec1.divide(vec2).toString();
   *     // => x:50, y:25
   *
   *     vec1.divide(4).toString(); // notice vec1 is immutable
   *     // => x:25, y:12.5
   */
  divide(vec) {
    return this.divideX(vec).divideY(vec); // operator is chainable
  }

  /**
   * multiplies X axis by another vector's X axis or certain number
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(100, 50);
   *     var vec2 = new Vector(2, 2);
   *     vec1.multiplyX(vec2).toString();
   *     // => x:200, y:50
   *
   *     vec1.multiplyX(4).toString(); // notice vec1 is immutable
   *     // => x:400, y:10
   */
  multiplyX(vec) {
    const { isVector } = Vector;
    const { multiply } = this.operatorSystem;
    const targetX = multiply(this.x, isVector(vec) ? vec.x : vec);
    return new Vector(targetX, this.y);
  }

  /**
   * multiplies Y axis by another vector's Y axis or certain number
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(100, 50);
   *     var vec2 = new Vector(2, 2);
   *     vec1.multiplyY(vec2).toString();
   *     // => x:100, y:100
   *
   *     vec1.multiplyY(4).toString(); // notice vec1 is immutable
   *     // => x:100, y:200
   */
  multiplyY(vec) {
    const { isVector } = Vector;
    const { multiply } = this.operatorSystem;
    const targetY = multiply(this.y, isVector(vec) ? vec.y : vec);
    return new Vector(this.x, targetY);
  }

  /**
   * multiplies by another vector's or certain number
   *
   *
   * @param {(Vector| Number)} vec - The other vector or number
   * @return {Vector}
   * @memberof Vector
   * @example
   *     var vec1 = new Vector(100, 50);
   *     var vec2 = new Vector(2, 2);
   *     vec1.multiply(vec2).toString();
   *     // => x:200, y:100
   *
   *     vec1.multiply(4).toString(); // notice vec1 is immutable
   *     // => x:400, y:200
   */
  multiply(vec) {
    return this.multiplyX(vec).multiplyY(vec); // operator is chainable
  }
}

export default Vector;
