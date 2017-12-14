import ContactListModule from './contactList';
import ContactListController from './contactList.controller';
import ContactListComponent from './contactList.component';
import ContactListTemplate from './contactList.html';

describe('ContactList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ContactListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ContactListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ContactListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ContactListController);
    });
  });
});
