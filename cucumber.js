module.exports = {
  default: {
    require: [
      'steps/**/*.ts',
      'tests/**/*.ts',
    ],
    timeout: 30000,
    requireModule: ['ts-node/register'],
    format: ['progress'],
    publishQuiet: true
  }
};
