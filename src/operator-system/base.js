export default class BaseOperatorSystem {
  name = 'BaseOperatorSystem';
  static create(x) {
    return Number(x);
  }
  static plus(x, y) {
    return Number(x) + Number(y);
  }
  static minus(x, y) {
    return Number(x) - Number(y);
  }
  static divide(x, y) {
    return Number(x) / Number(y);
  }
  static multiply(x, y) {
    return  Number(x) * Number(y);
  }
  static sqrt(x) {
    return Math.sqrt(x);
  }
  static abs(x) {
    return Math.abs(x);
  }
}
