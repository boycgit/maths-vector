import Vector from '../src/index';
import Chance from 'chance';
import { BaseOperatorSystem } from '../src/operator-system';

const chance = new Chance();

// 设置计算系统为基础计算系统
Vector.SYSTEM = BaseOperatorSystem;

/* ----------------------------------------------------
    相加
----------------------------------------------------- */
describe('[Base Operator] 实用功能 - addX()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量的 X 量相加', () => {
    const result = a.addX(b);
    expect(result.x).toBe((int1 + int3).toString());
    expect(result.y).toBe(int2.toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.addX(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });
  test('支持直接和数值相加', () => {
    const result = a.addX(int4);
    expect(result.x).toBe((int1 + int4).toString());
    expect(result.y).toBe(int2.toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 实用功能 - addY()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量的 Y 量相加', () => {
    const result = a.addY(b);
    expect(result.x).toBe(int1.toString());
    expect(result.y).toBe((int2 + int4).toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.addY(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });

  test('支持直接和数值相加', () => {
    const result = a.addY(int3);
    expect(result.x).toBe(int1.toString());
    expect(result.y).toBe((int2 + int3).toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 实用功能 - add()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量相加，各轴分别相加', () => {
    const result = a.add(b);
    expect(result.x).toBe((int1 + int3).toString());
    expect(result.y).toBe((int2 + int4).toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.add(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });

  test('支持直接和数值相加', () => {
    const result = a.add(int3);
    expect(result.x).toBe((int1 + int3).toString());
    expect(result.y).toBe((int2 + int3).toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

/* ----------------------------------------------------
    相减
----------------------------------------------------- */
describe('[Base Operator] 实用功能 - subtractX()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量的 X 量相减', () => {
    const result = a.subtractX(b);
    expect(result.x).toBe((int1 - int3).toString());
    expect(result.y).toBe(int2.toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.subtractX(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });
  test('支持直接和数值相减', () => {
    const result = a.subtractX(int4);
    expect(result.x).toBe((int1 - int4).toString());
    expect(result.y).toBe(int2.toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 实用功能 - subtractY()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量的 Y 量相减', () => {
    const result = a.subtractY(b);
    expect(result.x).toBe(int1.toString());
    expect(result.y).toBe((int2 - int4).toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.subtractY(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });

  test('支持直接和数值相减', () => {
    const result = a.subtractY(int3);
    expect(result.x).toBe(int1.toString());
    expect(result.y).toBe((int2 - int3).toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 实用功能 - subtract()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量相减，各轴分别相减', () => {
    const result = a.subtract(b);
    expect(result.x).toBe((int1 - int3).toString());
    expect(result.y).toBe((int2 - int4).toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.subtract(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });

  test('支持直接和数值相减', () => {
    const result = a.subtract(int3);
    expect(result.x).toBe((int1 - int3).toString());
    expect(result.y).toBe((int2 - int3).toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

/* ----------------------------------------------------
    相乘
----------------------------------------------------- */
describe('[Base Operator] 实用功能 - multiplyX()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量的 X 量相乘', () => {
    const result = a.multiplyX(b);
    expect(result.x).toBe((int1 * int3).toString());
    expect(result.y).toBe(int2.toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.multiplyX(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });
  test('支持直接和数值相乘', () => {
    const result = a.multiplyX(int4);
    expect(result.x).toBe((int1 * int4).toString());
    expect(result.y).toBe(int2.toString());
  });

  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 实用功能 - multiplyY()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量的 Y 量相乘', () => {
    const result = a.multiplyY(b);
    expect(result.x).toBe(int1.toString());
    expect(result.y).toBe((int2 * int4).toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.multiplyY(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });

  test('支持直接和数值相乘', () => {
    const result = a.multiplyY(int3);
    expect(result.x).toBe(int1.toString());
    expect(result.y).toBe((int2 * int3).toString());
  });

  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 实用功能 - multiply()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量相乘，各轴分别相乘', () => {
    const result = a.multiply(b);
    expect(result.x).toBe((int1 * int3).toString());
    expect(result.y).toBe((int2 * int4).toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.multiply(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });

  test('支持直接和数值相乘', () => {
    const result = a.multiply(int3);
    expect(result.x).toBe((int1 * int3).toString());
    expect(result.y).toBe((int2 * int3).toString());
  });

  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

/* ----------------------------------------------------
    相除
----------------------------------------------------- */
describe('[Base Operator] 实用功能 - divideX()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量的 X 量相除', () => {
    const result = a.divideX(b);
    expect(result.x).toBe((int1 / int3).toString());
    expect(result.y).toBe(int2.toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.divideX(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });
  test('支持直接和数值相除', () => {
    const result = a.divideX(int4);
    expect(result.x).toBe((int1 / int4).toString());
    expect(result.y).toBe(int2.toString());
  });

  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 实用功能 - divideY()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量的 Y 量相除', () => {
    const result = a.divideY(b);
    expect(result.x).toBe(int1.toString());
    expect(result.y).toBe((int2 / int4).toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.divideY(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });

  test('支持直接和数值相除', () => {
    const result = a.divideY(int3);
    expect(result.x).toBe(int1.toString());
    expect(result.y).toBe((int2 / int3).toString());
  });

  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 实用功能 - divide()', () => {
  let a, b, int1, int2, int3, int4;
  beforeEach(() => {
    int1 = chance.integer();
    int2 = chance.integer();
    int3 = chance.integer();
    int4 = chance.integer();
    a = new Vector(int1, int2);
    b = new Vector(int3, int4);
  });

  test('两向量相除，各轴分别相除', () => {
    const result = a.divide(b);
    expect(result.x).toBe((int1 / int3).toString());
    expect(result.y).toBe((int2 / int4).toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.divide(b);
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
    expect(b.x).toBe(int3.toString());
    expect(b.y).toBe(int4.toString());
  });

  test('支持直接和数值相除', () => {
    const result = a.divide(int3);
    expect(result.x).toBe((int1 / int3).toString());
    expect(result.y).toBe((int2 / int3).toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(b.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

/* ----------------------------------------------------
    反转
----------------------------------------------------- */
describe('[Base Operator] 实用功能 - invertX()', () => {
  let a, int1, int2;
  beforeEach(() => {
    int1 = chance.pickone([chance.floating(), chance.integer()]);
    int2 = chance.pickone([chance.floating(), chance.integer()]);
    a = new Vector(int1, int2);
  });

  test('向量 X 轴反转', () => {
    const result = a.invertX();
    expect(result.x).toBe((-int1).toString());
    expect(result.y).toBe(int2.toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.invertX();
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 实用功能 - invertY()', () => {
  let a, int1, int2;
  beforeEach(() => {
    int1 = chance.pickone([chance.floating(), chance.integer()]);
    int2 = chance.pickone([chance.floating(), chance.integer()]);
    a = new Vector(int1, int2);
  });

  test('向量 Y 轴反转', () => {
    const result = a.invertY();
    expect(result.x).toBe(int1.toString());
    expect(result.y).toBe((-int2).toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.invertY();
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 实用功能 - invert()', () => {
  let a, int1, int2;
  beforeEach(() => {
    int1 = chance.pickone([chance.floating(), chance.integer()]);
    int2 = chance.pickone([chance.floating(), chance.integer()]);
    a = new Vector(int1, int2);
  });

  test('向量 X、Y 轴都反转', () => {
    const result = a.invert();
    expect(result.x).toBe((-int1).toString());
    expect(result.y).toBe((-int2).toString());
  });

  test('该操作不影响原来向量的数值', () => {
    a.invert();
    expect(a.x).toBe(int1.toString());
    expect(a.y).toBe(int2.toString());
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

/* ----------------------------------------------------
    归一化
----------------------------------------------------- */
describe('[Base Operator] 实用功能 - normalize()', () => {
  let a;
  beforeEach(() => {
    a = new Vector(3, 4);
  });

  test('转换成单位向量', () => {
    const result = a.normalize();
    expect(result.x).toBe('0.6');
    expect(result.y).toBe('0.8');
  });
  test('和函数 norm 作用一致', () => {
    const result = a.norm();
    expect(result.x).toBe('0.6');
    expect(result.y).toBe('0.8');
  });

  test('该操作不影响原来向量的数值', () => {
    a.invert();
    expect(a.x).toBe('3');
    expect(a.y).toBe('4');
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

/* ----------------------------------------------------
    旋转角度
----------------------------------------------------- */

describe('[Base Operator] 属性 - rotate', () => {
  let a;
  let precision = 7;
  beforeEach(() => {
    a = new Vector(1, 1);
  });

  test('向量 (1, 1) 逆时针旋转 PI/4 后为 (0, sqrt(2))', () => {
    const result = a.rotate(Math.PI / 4);
    // 因为精度的问题，只要截取前面几位相等就可以
    expect(Math.round(result.x)).toBe(0);
    expect(result.y.slice(0, precision)).toBe(
      Math.sqrt(2)
        .toString()
        .slice(0, precision)
    );
  });
  test('该操作不影响原来向量的数值', () => {
    a.rotate(Math.PI / 4);
    expect(a.x).toBe('1');
    expect(a.y).toBe('1');
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 属性 - rotateDegree', () => {
  let a;
  beforeEach(() => {
    a = new Vector(1, 0);
  });

  test('向量 (1, 0) 逆时针旋转 90 后为 (0, 1)', () => {
    const result = a.rotateDegree(90);
    // 因为精度的问题，只要截取前面几位相等就可以
    expect(Math.round(result.x)).toBe(0);
    expect(Math.round(result.y)).toBe(1);
  });
  test('该操作不影响原来向量的数值', () => {
    a.rotate(90);
    expect(a.x).toBe('1');
    expect(a.y).toBe('0');
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});
