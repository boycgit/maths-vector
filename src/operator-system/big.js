import Big from 'big.js';
import BaseOperatorSystem from './base';

export default class BigOperatorSystem extends BaseOperatorSystem {
  name = 'BigOperatorSystem';
  static create(x) {
    return new Big(x);
  }
  static plus(x, y) {
    return new Big(x).plus(y);
  }
  static minus(x, y) {
    return new Big(x).minus(y);
  }

  static divide(x, y) {
    return new Big(x).div(y);
  }

  static multiply(x, y) {
    return new Big(x).times(y);
  }

  static sqrt(x) {
    return new Big(x).sqrt();
  }
  static abs(x) {
    return new Big(x).abs();
  }
}
