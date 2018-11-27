module.exports = function() {
  return {
    files: ['/numberExtractor.js'],

    tests: ['/*_wallaby.test.js'],
    testFramework: 'jest',
    env: {
      type: 'node',
    },
  };
};
