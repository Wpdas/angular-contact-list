import { ContactService } from './service/contact.service';
import { ContactDetailComponent } from './detail/contact-detail.component';
import { ContactsListComponent } from './list/contacts-list.component';
import { ContactRoutingModule } from './contact-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  //Angular imports
  imports: [CommonModule, ContactRoutingModule, FormsModule],

  //Declarations for this module
  declarations: [ContactDetailComponent, ContactsListComponent],

  //Exports the classes to others Components
  exports: [ContactsListComponent],

  //Providencia serviços
  providers: [ContactService]
})
export class ContactsModule {}
