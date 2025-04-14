import angular from 'angular';

class utilsService {
  /* @ngInject */
  constructor($timeout) {
    this.$timeout = $timeout;
  }

  /**
   * @param {String} string
   * @param {String} substring
   * @return {Boolean}
   */
  includesInsensitive(string, substring) {
    return string.toLowerCase().indexOf(substring.toLowerCase()) > -1;
  }

  /**
   * @param {Function} cb
   * @param {Boolean} [invokeApply=false]
   */
  postDigest(cb, invokeApply) {
    this.$timeout(cb, 0, !!invokeApply);
  }
}

export default angular.module('utilsService', [])
  .service('utilsService', utilsService).name;
