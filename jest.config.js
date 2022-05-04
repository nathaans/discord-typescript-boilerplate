const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths,
    { prefix: '<rootDir>/src' },
  ),
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
};
