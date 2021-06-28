module.exports = {
  verbose: true,
  preset: 'jest-preset-angular',
  collectCoverage: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/app/**/*.ts'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  modulePaths: ["<rootDir>"],
  coveragePathIgnorePatterns: [
    'setup-jest.ts',
    'public_api.ts',
    '.module.ts',
    '.interface.ts',
    '.utils.ts',
    '.service.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 20,
      branches: 20,
      functions: 20,
      lines: 20,
    },
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-test))'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json'
    }
  }
};