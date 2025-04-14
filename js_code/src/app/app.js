import angular from 'angular';
import angularRoute from 'angular-route';
import angularAnimate from 'angular-animate';

import common from './common/common.module';
import components from './components/components.module';

import './app.css';

const app = angular.module('app', [
  angularRoute,
  angularAnimate,

  common,
  components,
]);

app.config(/* @ngInject */($logProvider, $locationProvider, $routeProvider) => {
  $logProvider.debugEnabled(process.env.NODE_ENV === 'development');
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/home', {
      template: '<home-component></home-component>',
    })
    .when('/about', {
      template: '<about-component></about-component>',
    })
    .otherwise('/home');
});

app.component('appComponent', {
  template: `
    <header-component></header-component>
    <div ng-view class="view-animate"></div>
  `,
});
