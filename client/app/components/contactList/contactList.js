import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListComponent from './contactList.component';

let contactListModule = angular.module('contactList', [
    uiRouter
  ])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('contactList', {
        url: '/',
        component: 'contactList'
      });
  })

  .component('contactList', contactListComponent)

  .name;

export default contactListModule;
