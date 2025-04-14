import angular from 'angular';
import header from './header/header.module';
import home from './home/home.module';
import about from './about/about.module';

export default angular.module('components', [
  header,
  home,
  about,
]).name;
