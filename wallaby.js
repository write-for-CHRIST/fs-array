module.exports = wallaby => {
  return {
    files: ['src/**/*.js'],
    tests: ['test/**/*.js'],
    testFramework: 'ava',
    env: {
      type: 'node',
      runner: 'node'
    },
    debug: true
  };
};
