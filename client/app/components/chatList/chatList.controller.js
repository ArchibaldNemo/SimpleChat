class ChatListController {
  constructor($stateParams,ContactsService,$timeout,$state) {
    'ngInject';
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.$timeout = $timeout;
    this.ContactsService = ContactsService;
    this.messages = [];
    this.contact = this.$stateParams.contact;
    this.myFace = 'https://pp.userapi.com/c836222/v836222501/6ca0d/fuqR2rZf_1s.jpg';
    this.currentMessage = '';
    this.loadMessages();

  }

  loadMessages() {
    console.log('this.$stateParams.contact=',this.$stateParams.contact);
    this.ContactsService.getMessages(this.contact.id).then(result => {
      this.messages = result.messages;
    });
  }

  sendMessage() {
    if(!this.currentMessage) return;
    let message = {
      who : "me",
      "text": this.currentMessage,
      "delivered" : false
    };
    this.messages.push(message);
    this.$timeout(() => {message.delivered = true}, 2000);
    this.currentMessage = '';
  }

  goToContacts() {
    this.$state.go('contactList');
  }
}

export default ChatListController;
