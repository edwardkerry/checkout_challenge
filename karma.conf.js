// Karma configuration
// Generated on Tue Mar 22 2016 15:09:04 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    basePath: './',

    frameworks: ['jasmine'],

    files: [
      'src/*.js',
      'test/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['spec', 'progress', 'coveralls'],
    specReporter: {
        maxLogLines: 5,         // limit number of lines logged per test
        suppressErrorSummary: true,  // do not print error summary
        suppressFailed: false,  // do not print information about failed tests
        suppressPassed: false,  // do not print information about passed tests
        suppressSkipped: true  // do not print information about skipped tests
      },

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: true,

    concurrency: Infinity
  })
}
