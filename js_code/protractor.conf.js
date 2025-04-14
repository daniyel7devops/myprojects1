const Utils = require('./e2e/protractor.conf.utils');

module.exports.config = {
  framework: 'mocha',
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
  },
  specs: ['e2e/*.spec.js'],
  onPrepare: () => {
    /* global browser */
    Utils.disableAnimations(browser);
  },
};
