import Vector from '../src/index';
import Chance from 'chance';
import { BaseOperatorSystem } from '../src/operator-system';

const chance = new Chance();

describe('[Base Operator] 构造函数 - 默认构造函数', () => {
  var a;
  beforeEach(() => {
    a = new Vector();
    a.config({ system: 'base' });
  });

  test('构造函数使用 JS 内置基础算术体系 ', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(a.x).toBe('0');
    expect(a.y).toBe('0');
  });

  test('接受两个入参，形成向量', () => {
    const x = chance.floating();
    const y = chance.floating();
    a = new Vector(x, y); // 重新赋值

    expect(a.x).toBe(x.toString());
    expect(a.y).toBe(y.toString());
  });

  test('可以对x、y值进行直接赋值', () => {
    const x = chance.floating();
    const y = chance.floating();
    a.x = x;
    a.y = y;
    expect(a.x).toBe(x.toString());
    expect(a.y).toBe(y.toString());
  });
});

describe('[Base Operator] 静态方法 - fromArray()', () => {
  var a;
  const arr = [chance.floating(), chance.floating(), chance.floating()];
  beforeEach(() => {
    a = Vector.fromArray(arr);
    a.config({ system: BaseOperatorSystem });
  });
  test('该方法应当返回 Vector 实例', () => {
    expect(a).toBeInstanceOf(Vector);
  });
  test('该方法所生成的向量数值来源于数组', () => {
    expect(a.x).toBe('' + arr[0]);
    expect(a.y).toBe('' + arr[1]);
  });
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});

describe('[Base Operator] 静态方法 - fromObject()', () => {
  var a;
  const obj = {
    x: chance.floating(),
    y: chance.floating(),
    z: chance.floating()
  };
  beforeEach(() => {
    a = Vector.fromObject(obj);
    a.config({ system: 'base' });
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
  test('使用 JS 内置基础算术体系', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
  });
});
