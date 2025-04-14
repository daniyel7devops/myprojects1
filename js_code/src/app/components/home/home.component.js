import angular from 'angular';
import template from './home.html';

import './home.css';
import angularImage from '../../../assets/images/angularjs.png';

class homeComponent {
  /* @ngInject */
  constructor($log) {
    this.$log = $log;
    $log.log('homeComponent');
  }

  $onInit() {
    this.angularImage = angularImage;
  }
}

export default angular.module('homeComponent', []).component('homeComponent', {
  template,
  controller: homeComponent,
}).name;
