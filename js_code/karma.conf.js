const webpackConfig = require('./webpack.test');

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    singleRun: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    reporters: ['spec'],
    files: ['src/app/app.specs.js'],
    preprocessors: { 'src/app/app.specs.js': ['webpack', 'sourcemap'] },
    webpack: webpackConfig,
    webpackMiddleware: { stats: 'errors-only' },
    coverageReporter: {
      type: config.coverage ? config.coverage : 'text-summary',
      dir: 'coverage/',
      subdir: '.',
    },
  });
};
