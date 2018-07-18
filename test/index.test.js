import Vector from '../src/index';
import Chance from 'chance';
const chance = new Chance();

describe('[Big Operator] 构造函数 - 默认构造函数', () => {
  test('默认生成的向量是 (0, 0)', () => {
    const a = new Vector();
    expect(a.operatorSystem.name).toBe('BigOperatorSystem');
    expect(a.x).toBe('0');
    expect(a.y).toBe('0');
  });

  test('接受两个入参，形成向量', () => {
    const x = chance.floating();
    const y = chance.floating();
    const a = new Vector(x, y);

    expect(a.x).toBe(x.toString());
    expect(a.y).toBe(y.toString());
  });

  test('可以对x、y值进行直接赋值', () => {
    const x = chance.floating();
    const y = chance.floating();
    const a = new Vector();
    a.x = x;
    a.y = y;
    expect(a.x).toBe(x.toString());
    expect(a.y).toBe(y.toString());
  });
});

describe('[Big Operator] 静态方法 - fromArray()', () => {
  var a;
  const arr = [chance.floating(), chance.floating(), chance.floating()];
  beforeEach(() => {
    a = Vector.fromArray(arr);
  });
  test('该方法应当返回 Vector 实例', () => {
    expect(a).toBeInstanceOf(Vector);
  });
  test('该方法所生成的向量数值来源于数组', () => {
    expect(a.x).toBe('' + arr[0]);
    expect(a.y).toBe('' + arr[1]);
  });

  test('兼容空数组的情况', () => {
    a = Vector.fromArray([]);
    expect(a.x).toBe('0');
    expect(a.y).toBe('0');
  });
  test('使用 JS 内置大数算术体系', () => {
    expect(a.operatorSystem.name).toBe('BigOperatorSystem');
  });
});

describe('[Big Operator] 静态方法 - fromObject()', () => {
  var a;
  const obj = {
    x: chance.floating(),
    y: chance.floating(),
    z: chance.floating()
  };
  beforeEach(() => {
    a = Vector.fromObject(obj);
  });
  test('该方法应当返回 Vector 实例', () => {
    expect(a).toBeInstanceOf(Vector);
  });
  test('该方法所生成的向量数值来源于对象', () => {
    expect(a.x).toBe(obj.x.toString());
    expect(a.y).toBe(obj.y.toString());
  });

  test('兼容空对象的情况', () => {
    a = Vector.fromArray({});
    expect(a.x).toBe('0');
    expect(a.y).toBe('0');
  });
  test('使用 JS 内置大数算术体系', () => {
    expect(a.operatorSystem.name).toBe('BigOperatorSystem');
  });
});
