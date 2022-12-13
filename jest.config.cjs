// jest.config.js
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.test');

module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      { tsconfig: "tsconfig.test.json" }
    ],
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testMatch: [
    "**/*.test.ts",
    "**/*.spec.ts"
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
}