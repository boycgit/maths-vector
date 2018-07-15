export default class BaseOperatorSystem {
  static name = 'BaseOperatorSystem';
  static create(x) {
    return x;
  }
  static plus(x, y) {
    return x + y;
  }
  static minus(x, y) {
    return x - y;
  }
  static divide(x, y) {
    return x / y;
  }
  static multiply(x, y) {
    return new x() * y;
  }
  static sqrt(x) {
    return Math.sqrt(x);
  }
}
