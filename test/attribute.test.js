import Vector from '../src/index';
import Chance from 'chance';
import Big from 'big.js';

const chance = new Chance();

/* ----------------------------------------------------
    向量长度
----------------------------------------------------- */
describe('[Big Operator] 属性 - length', () => {
  let a, int1, int2;
  beforeEach(() => {
    int1 = chance.pickone([
      chance.floating({ min: 0, max: 100, fixed: 8 }),
      chance.integer({ min: -20, max: 20 })
    ]);
    int2 = chance.pickone([
      chance.floating({ min: 0, max: 100, fixed: 8 }),
      chance.integer({ min: -20, max: 20 })
    ]);
    a = new Vector(int1, int2);
  });

  test('获取向量长度为 sqrt(x^2 + y^2)', () => {
    expect(a.length).toBe(
      new Big(int1)
        .pow(2)
        .add(new Big(int2).pow(2))
        .sqrt()
        .toString()
    );
  });
  test('使用 JS 内置大数算术体系', () => {
    expect(a.operatorSystem.name).toBe('BigOperatorSystem');
  });
});

/* ----------------------------------------------------
    向量角度
----------------------------------------------------- */
describe('[Big Operator] 属性 - angle', () => {
  let a;
  let precision = 7;
  beforeEach(() => {
    a = new Vector(1, 1);
  });

  test('获取 (1, 1) 向量角度是 PI/4', () => {
    // 因为精度的问题，只要截取前面几位相等就可以
    expect(a.angle.slice(0, precision)).toBe(
      new Big(Math.PI)
        .div(4)
        .toString()
        .slice(0, precision)
    );

    // 转换成角度，记得注意小数点的精度
    expect(Math.round(a.angleDegree)).toBe(45);
  });
  test('使用 JS 内置大数算术体系', () => {
    expect(a.operatorSystem.name).toBe('BigOperatorSystem');
  });
});

describe('[Big Operator] 属性 - verticalAngle', () => {
  let a;
  let precision = 7;
  beforeEach(() => {
    a = new Vector(1, 1);
  });

  test('获取 (1, 1) 向量角度是 PI/4', () => {
    // 因为精度的问题，只要截取前面几位相等就可以
    expect(a.verticalAngle.slice(0, precision)).toBe(
      new Big(Math.PI)
        .div(4)
        .toString()
        .slice(0, precision)
    );

    // 转换成角度，记得注意小数点的精度
    expect(Math.round(a.verticalAngleDegree)).toBe(45);
  });
  test('使用 JS 内置大数算术体系', () => {
    expect(a.operatorSystem.name).toBe('BigOperatorSystem');
  });
});

/* ----------------------------------------------------
    判断向量是否为零
----------------------------------------------------- */
describe('[Big Operator] 属性 - isZero', () => {
  let a, int1, int2;
  beforeEach(() => {
    int1 = chance.pickone([
      chance.floating({ min: 0, max: 100, fixed: 8 }),
      chance.integer({ min: -20, max: 20 })
    ]);
    int2 = chance.pickone([
      chance.floating({ min: 0, max: 100, fixed: 8 }),
      chance.integer({ min: -20, max: 20 })
    ]);
    a = new Vector(int1, int2);
  });

  test('判断是否是零向量', () => {
    // 随机构成的 a 基本不可能是零向量
    expect(a.isZero()).toBeFalsy();

    const b = new Vector();
    const c = new Vector(0, 0);
    // 判断零向量
    expect(b.isZero()).toBeTruthy();
    expect(c.isZero()).toBeTruthy();
  });
  test('使用 JS 内置大数算术体系', () => {
    expect(a.operatorSystem.name).toBe('BigOperatorSystem');
  });
});

/* ----------------------------------------------------
    判断向量是否相等
----------------------------------------------------- */
describe('[Big Operator] 常用方法 - isEqual', () => {
  let a, b, int1, int2;
  beforeEach(() => {
    int1 = chance.pickone([
      chance.floating({ min: 0, max: 100, fixed: 8 }),
      chance.integer({ min: -20, max: 20 })
    ]);
    int2 = chance.pickone([
      chance.floating({ min: 0, max: 100, fixed: 8 }),
      chance.integer({ min: -20, max: 20 })
    ]);
    a = new Vector(int1, int2);
    b = new Vector(int1, int2);
  });

  test('判断两向量相等', () => {
    expect(a.isEqualTo(b)).toBeTruthy();
  });
  test('使用 JS 内置大数算术体系', () => {
    expect(a.operatorSystem.name).toBe('BigOperatorSystem');
  });
});

/* ----------------------------------------------------
    向量的输出
----------------------------------------------------- */
describe('[Big Operator] 常用导出方法 - toString, toArray, toObject', () => {
  let a, int1, int2;
  beforeEach(() => {
    int1 = chance.pickone([
      chance.floating({ min: 0, max: 100, fixed: 8 }),
      chance.integer({ min: -20, max: 20 })
    ]);
    int2 = chance.pickone([
      chance.floating({ min: 0, max: 100, fixed: 8 }),
      chance.integer({ min: -20, max: 20 })
    ]);
    a = new Vector(int1, int2);
  });

  test('输出字符串', () => {
    // 随机构成的 a 基本不可能是零向量
    expect(a.toString()).toBe(`x:${int1}, y:${int2}`);
  });
  test('输出成对象', () => {
    // 随机构成的 a 基本不可能是零向量
    expect(a.toObject()).toEqual({ x: int1.toString(), y: int2.toString() });
  });
  test('输出成数组', () => {
    // 随机构成的 a 基本不可能是零向量
    expect(a.toArray()).toEqual([int1.toString(), int2.toString()]);
  });

  test('使用 JS 内置大数算术体系', () => {
    expect(a.operatorSystem.name).toBe('BigOperatorSystem');
  });
});
