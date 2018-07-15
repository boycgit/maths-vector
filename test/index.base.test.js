import Vector from '..';
import Chance from 'chance';
const chance = new Chance();

describe('[Base Operator] 构造函数 - 默认构造函数', () => {
  var a;
  beforeEach(() => {
    a = new Vector();
    a.config({ system: 'base' });
  });

  test('构造函数使用 JS 内置算术体系 ', () => {
    expect(a.operatorSystem.name).toBe('BaseOperatorSystem');
    expect(a.x).toBe('0');
    expect(a.y).toBe('0');
  });
});

describe('[Base Operator] 静态方法 - fromArray()', () => {
  var a;
  const arr = [chance.floating(), chance.floating(), chance.floating()];
  beforeEach(() => {
    a = Vector.fromArray(arr);
    a.config({ system: 'base' });
  });
  test('该方法应当返回 Vector 实例', () => {
    expect(a).toBeInstanceOf(Vector);
  });
  test('该方法所生成的向量数值来源于数组', () => {
    expect(a.x).toBe(''+arr[0]);
    expect(a.y).toBe(''+arr[1]);
  });
});
