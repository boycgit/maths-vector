import Vector from '..';
import Chance from 'chance';
import Big from 'big.js';

const chance = new Chance();

/* ----------------------------------------------------
    相加
----------------------------------------------------- */
describe('[Big Operator] 实用功能 - addX()', () => {
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
});

describe('[Big Operator] 实用功能 - addY()', () => {
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
});

describe('[Big Operator] 实用功能 - add()', () => {
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
});

/* ----------------------------------------------------
    相减
----------------------------------------------------- */
describe('[Big Operator] 实用功能 - subtractX()', () => {
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
});

describe('[Big Operator] 实用功能 - subtractY()', () => {
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
});

describe('[Big Operator] 实用功能 - subtract()', () => {
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
});


/* ----------------------------------------------------
    相乘
----------------------------------------------------- */
describe('[Big Operator] 实用功能 - multiplyX()', () => {
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
        expect(result.x).toBe(new Big(int1).times(int3).toString());
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
        expect(result.x).toBe(new Big(int1).times(int4).toString());
        expect(result.y).toBe(int2.toString());
    });
});

describe('[Big Operator] 实用功能 - multiplyY()', () => {
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
        expect(result.y).toBe(new Big(int2).times(int4).toString());
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
        expect(result.y).toBe(new Big(int2).times(int3).toString());
    });
});

describe('[Big Operator] 实用功能 - multiply()', () => {
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
        expect(result.x).toBe(new Big(int1).times(int3).toString());
        expect(result.y).toBe(new Big(int2).times(int4).toString());
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
        expect(result.x).toBe(new Big(int1).times(int3).toString());
        expect(result.y).toBe(new Big(int2).times(int3).toString());
    });
});


/* ----------------------------------------------------
    相除
----------------------------------------------------- */
describe('[Big Operator] 实用功能 - divideX()', () => {
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
    expect(result.x).toBe(new Big(int1).div(int3).toString());
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
    expect(result.x).toBe(new Big(int1).div(int4).toString());
    expect(result.y).toBe(int2.toString());
  });
});

describe('[Big Operator] 实用功能 - divideY()', () => {
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
    expect(result.y).toBe(new Big(int2).div(int4).toString());
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
    expect(result.y).toBe(new Big(int2).div(int3).toString());
  });
});

describe('[Big Operator] 实用功能 - divide()', () => {
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
    expect(result.x).toBe(new Big(int1).div(int3).toString());
    expect(result.y).toBe(new Big(int2).div(int4).toString());
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
    expect(result.x).toBe(new Big(int1).div(int3).toString());
    expect(result.y).toBe(new Big(int2).div(int3).toString());
  });
});
