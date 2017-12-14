import ContactsService from '../../../service/ContactsService';

class ContactListController {
  constructor(ContactsService, $state) {
    'ngInject';
    this.name = 'contactList';
    this.ContactsService = ContactsService;
    this.contacts = [];
    this.loadContacts();
    this.$state = $state;
  }

  loadContacts() {
    this.ContactsService.getContacts().then(result => this.contacts = result);
  }

  getContactById(contactId) {
    return this.contacts.find(contact => contact.id === contactId);
  }

  goToChat(contactId) {
    this.$state.go('chatList',{contact:this.getContactById(contactId)});
  }
}

export default ContactListController;
