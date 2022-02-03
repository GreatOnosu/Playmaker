module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: { '\\.(ts|js)x?$': 'ts-jest' },
    reporters: ['default', 'jest-summary-reporter'],
  };