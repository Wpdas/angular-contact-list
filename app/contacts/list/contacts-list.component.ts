import { Component, OnInit } from '@angular/core';

import { ContactService } from '../service/contact.service';
import { Contact } from '../contact.model';

@Component({
  moduleId: module.id,
  selector: 'contacts-list',
  templateUrl: 'contacts-list.component.html'

  // Pode prover as classes aqui ou no módulo do contact ou no app (contacts.module.ts | app.module.ts)
  // depende de cada necessidade. Se o serviço ContactService for utilizado em varias camadas da aplicacao,
  // o melhor e prover ele nos módulos superiores (app.module.ts por exemplo).
  // providers: [
  //   ContactService
  // ]
  // (!) Está sendo importado no contacts.module.ts para ficar disponível em todas as camadas do contact
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // Poderia ser colocado no construtor, e seria chamado quando
    // esse componente fosse instanciado, porém não é uma boa prática.
    this.contactService
      .getContacts()
      .then((contacts: Contact[]) => {
        this.contacts = contacts;
      })
      .catch(err => console.error(err));
  }
}
