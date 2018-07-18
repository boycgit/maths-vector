import { radian2degree, degree2radian } from '../src/util';
import Chance from 'chance';
const chance = new Chance();

/* ----------------------------------------------------
    radian2degree
----------------------------------------------------- */
describe('[Util] 实用功能 - radian2degree()', () => {
  test('弧度转换成角度', () => {
    expect((radian2degree(2 * Math.PI))).toBe(360);
    expect((radian2degree(Math.PI))).toBe(180);
    expect((radian2degree(Math.PI / 2))).toBe(90);
  });
});

/* ----------------------------------------------------
    degree2radian
----------------------------------------------------- */
describe('[Util] 实用功能 - radian2degree()', () => {
  test('角度转换成弧度', () => {
      expect((degree2radian(360))).toBe(2 * Math.PI);
    expect((degree2radian(180))).toBe(Math.PI);
    expect((degree2radian(90))).toBe(Math.PI/2);
  });
});
