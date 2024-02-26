module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/tests'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js'],
  coverageProvider: 'v8',
  setupFiles: ['dotenv/config'],
  watchPathIgnorePatterns: ['globalConfig']
};
