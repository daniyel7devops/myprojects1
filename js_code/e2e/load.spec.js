const { browser } = require('protractor');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { expect } = require('chai');

chai.use(chaiAsPromised);

describe('load.spec', function () {
  this.timeout(5000);

  beforeEach(() => {
    browser.get('./');
  });

  describe('Load app', () => {
    const title = 'angularjs-project-example';
    it('should have a title', () => expect(browser.getTitle()).to.eventually.equal(title));
  });
});
