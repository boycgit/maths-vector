import Vector, { BaseOperatorSystem } from '../src/index';
import Chance from 'chance';
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
const chance = new Chance();

/* ----------------------------------------------------
    相加
----------------------------------------------------- */
describe('[Other Operator] 测试 Operator System', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('DecimalOperatorSystem');
    expect(b.operatorSystem.name).toBe('DecimalOperatorSystem');
  });
});

/* ----------------------------------------------------
    外积（叉积）
----------------------------------------------------- */
describe('[Other Operator] 向量乘积相关 - cross()', () => {
  let a, b, int1, int2, int3, int4;
  let precision = 7;

  beforeEach(() => {
    int1 = chance.floating({ min: 0, max: 100, fixed: 8 });
    int2 = chance.floating({ min: 0, max: 100, fixed: 8 });
    int3 = chance.floating({ min: 0, max: 100, fixed: 8 });
    int4 = chance.floating({ min: 0, max: 100, fixed: 8 });
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量外积也是数值', () => {
    const result = a.cross(b);
      expect(result.slice(0, precision)).toBe((int1 * int4 - int2 * int3).toString().slice(0, precision));
  });

  test('该操作不影响原来向量的数值', () => {
    a.divideY(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('DecimalOperatorSystem');
    expect(b.operatorSystem.name).toBe('DecimalOperatorSystem');
  });
});
