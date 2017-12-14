class ContactsService {

  constructor($http, $rootScope) {
    'ngInject';
    this.$http = $http;
    this.$rootScope = $rootScope;
  }

  getContacts() {
    return this.$http.get('/data/contacts.json')
      .then((response) => response.data)
      .catch((error) =>  console.log('XHR Failed for contacts.' + error.data));
  }

  getMessages(contactId = null) {
    return this.$http.get('/data/messages.json')
      .then((response) => response.data.find(item => item.id === contactId))
      .catch((error) => console.log('XHR Failed for contacts.' + error.data));
  }
}

export default ContactsService;
