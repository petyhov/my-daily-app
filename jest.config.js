const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  snapshotResolver: './snapshotResolver.js',
  moduleNameMapper: {
    '^components': ['<rootDir>/src/components'],
    '^composables': ['<rootDir>/src/composables'],
    '^config': ['<rootDir>/src/config'],
    '^helpers': ['<rootDir>/src/helpers'],
    '^operations': ['<rootDir>/src/operations'],
    '^utils': ['<rootDir>/src/utils'],
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
