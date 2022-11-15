const modules = [
  'node-fetch',
  '(jest-)?react-native',
  '@react-native(-community)?',
  'data-uri-to-buffer',
  'fetch-blob',
  'formdata-polyfill',
];

module.exports = {
  // preset: '@testing-library/react-native',
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  fakeTimers: {
    enableGlobally: false,
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  transformIgnorePatterns: [`node_modules/(?!(${modules.join('|')})/)`],
};
