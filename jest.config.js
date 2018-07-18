module.exports = {
  // verbose: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['<rootDir>/src/**'],
  roots: ['<rootDir>/test/'],
  testMatch: ['<rootDir>/test/**/*.(test|base).js?(x)'],
  transformIgnorePatterns: [], // 不能忽略,
  testEnvironmentOptions: {
    resources: 'usable'
  }
};
