import OperatorSystem, { BigOperatorMap } from './operator-system';
/**
 * Vector - 2D vector class for common vector operations, support [big.js](https://github.com/MikeMcl/big.js) for arbitrary-precision decimal arithmetic
 */

class Vector {
  // 设置默认算术体系，默认采用 大数 算术体系
  static SYSTEM = BigOperatorMap;

  // 每个实例对应的操作体系
  operatorSystem = Vector.SYSTEM;

  
  config({ system = BigOperatorMap}) {
    if (typeof system === 'string') {
      this.operatorSystem = OperatorSystem[system] || Vector.SYSTEM;
    } else {
      this.operatorSystem = system;
    }
  }

  /**
   * Constructor. Will also work without the `new` keyword
   *
   * @param {Number} x Value of the x axis
   * @param {Number} y Value of the y axis
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
    return this._x;
  }
  set x(v) {
    this._x = this.operatorSystem.create(x);
  }
  get y() {
    return this._y;
  }
  set x(y) {
    this._y = this.operatorSystem.create(v);
  }

  /**
   * Creates a new instance from an array
   * @static
   * @param {Array} arr Array with the x and y values at index 0 and 1 respectively
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
   * @param {Object} obj Object with the values for x and y
   * @returns {Vector} The new instance
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
   * Adds another vector's X axis to this one
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.addX(vec2);
   *     vec1.toString();
   *     // => x:30, y:10
   *
   * @api public
   */
  /**
   * Adds another vector's X axis to this one
   *
   * @param {Victor} vector The other vector you want to add to this one
   * @return {Victor} `this` for chaining capabilities
   * @memberof Vector
   */
  addX(vec) {
    const { create, plus } = Vector.operatorSystem;
    return plus(this.x, vec.x);
  }
}

export default Vector;
