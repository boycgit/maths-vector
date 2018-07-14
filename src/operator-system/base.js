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
}
