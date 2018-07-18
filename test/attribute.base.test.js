import Vector from '../src/index';
import Chance from 'chance';
import { BaseOperatorSystem } from '../src/operator-system';

const chance = new Chance();

// 设置计算系统为基础计算系统
Vector.SYSTEM = BaseOperatorSystem;

/* ----------------------------------------------------
    向量长度
----------------------------------------------------- */
describe('[Base Operator] 属性 - length', () => {
  let a, int1, int2;
  let precision = 7;

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
    expect(a.length.slice(0, precision)).toBe(
      Math.sqrt(Math.pow(int1, 2) + Math.pow(int2, 2))
        .toString()
        .slice(0, precision)
    );
  });

  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

/* ----------------------------------------------------
    向量角度
----------------------------------------------------- */
describe('[Base Operator] 属性 - angle', () => {
  let a;
  let precision = 7;
  beforeEach(() => {
    a = new Vector(1, 1);
  });

  test('获取 (1, 1) 向量角度是 PI/4', () => {
    // 因为精度的问题，只要截取前面几位相等就可以
    expect(a.angle.slice(0, precision)).toBe(
      (Math.PI / 4).toString().slice(0, precision)
    );

    // 转换成角度，记得注意小数点的精度
    expect(Math.round(a.angleDegree)).toBe(45);
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 属性 - verticalAngle', () => {
  let a;
  let precision = 7;
  beforeEach(() => {
    a = new Vector(1, 1);
  });

  test('获取 (1, 1) 向量角度是 PI/4', () => {
    // 因为精度的问题，只要截取前面几位相等就可以
    expect(a.verticalAngle.slice(0, precision)).toBe(
      (Math.PI / 4).toString().slice(0, precision)
    );

    // 转换成角度，记得注意小数点的精度
    expect(Math.round(a.verticalAngleDegree)).toBe(45);
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});
