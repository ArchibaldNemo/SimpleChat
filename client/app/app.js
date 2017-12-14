import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ContactsService from './../service/ContactsService'
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Components,
    ngAnimate,
    ngAria,
    ngMaterial
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .service('ContactsService', ContactsService)
.component('app', AppComponent);
