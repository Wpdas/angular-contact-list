import { Injectable } from '@angular/core';
import ContactsMockData from '../../mock/contacts.mock';
import { Contact } from './../contact.model';

// @Injectable Emite metadados para o angular2 para que identifique outras dependencias do ContactService
// e faça a injeção dessas dependencias de forma correta.
@Injectable()
export class ContactService {
  getContacts(): Promise<Contact[]> {
    return Promise.resolve(ContactsMockData);
  }

  getContact(id: number): Promise<Contact> {
    return this.getContacts().then((contacts: Contact[]) =>
      contacts.find(contact => contact.id === id)
    );
  }

  getContactSlowly(): Promise<Contact[]> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    }).then(() => this.getContacts());
  }
}
