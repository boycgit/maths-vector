import Big from 'big.js';
import BaseOperatorSystem from './base';

export default class BigOperatorSystem extends BaseOperatorSystem {
  static name = 'BigOperatorSystem';
  static create(x) {
    return new Big(x);
  }
  static plus(x, y) {
    return new Big(x).plus(y);
  }
  static minus(x, y) {
    return new Big(x).minus(y);
  }
}
