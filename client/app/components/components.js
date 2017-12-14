import angular from 'angular';
import ContactList from './contactList/contactList';
import ChatList from './chatList/chatList';

let componentModule = angular.module('app.components', [
  ContactList,
  ChatList
])

.name;

export default componentModule;
