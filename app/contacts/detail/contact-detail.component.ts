import { Contact } from '../contact.model';
import { ContactService } from '../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'contact-detail',
  templateUrl: 'contact-detail.component.html',
  styleUrls: ['contact-detail.component.sass']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.contact = new Contact(0, '', '', '');

    // Acessar o Observable (params) contendo os dados do dos parametros passados na rota
    this.route.params.forEach((params: Params) => {
      // Pega o parametro "id" que foi setado na rota
      // O "+" é para converter a string para number
      let id: number = +params['id'];

      if (id) {
        // Busca os dados através do id
        this.contactService.getContact(id).then((contact: Contact) => {
          this.contact = contact;
        });
      }
    });
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'has-danger': !isValid && !isPristine,
      'has-success': isValid && !isPristine
    };
  }

  getFormControlClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-control-danger': !isValid && !isPristine,
      'form-control-success': isValid && !isPristine
    };
  }
}
