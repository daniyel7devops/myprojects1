import angular from 'angular';
import template from './header.html';

import './header.css';

class headerComponent {
  /* @ngInject */
  constructor($log, $location) {
    this.$log = $log;
    this.$location = $location;
    $log.log('headerComponent');
  }

  $onInit() {
    this.title = 'angularjs-project-example';
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

export default angular.module('headerComponent', []).component('headerComponent', {
  template,
  controller: headerComponent,
}).name;
