import angular from 'angular';
import template from './about.html';

import './about.css';

class aboutComponent {
  /* @ngInject */
  constructor($log) {
    this.$log = $log;
    $log.log('aboutComponent');
  }

  $onInit() {
    this.version = process.env.VERSION;
  }
}

export default angular.module('aboutComponent', []).component('aboutComponent', {
  template,
  controller: aboutComponent,
}).name;
