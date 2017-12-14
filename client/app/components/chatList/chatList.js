import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chatListComponent from './chatList.component';

let chatListModule = angular.module('chatList', [
    uiRouter
  ])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('chatList', {
        url: '/chat',
        component: 'chatList',
        params: {
          contact: null
        }
      });
  })

  .component('chatList', chatListComponent)

  .name;

export default chatListModule;
