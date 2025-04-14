import angular from 'angular';
import { expect } from 'chai';

import './utils.module';

describe('utils', () => {
  let utilsService;

  beforeEach(angular.mock.module('utils', (/* $provide */) => {
    // Mock injected dependency ie: $provide.constant('port', 8080);
  }));

  // Retrieve service to test
  beforeEach(angular.mock.inject((_utilsService_) => {
    utilsService = _utilsService_;
  }));

  describe('includesInsensitive', () => {
    it('should match substrings in strings', () => {
      const ret = utilsService.includesInsensitive('The car', 'CAR');
      expect(ret).to.equal(true);
    });
  });
});
