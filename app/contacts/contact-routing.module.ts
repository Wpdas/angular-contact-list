import { ContactDetailComponent } from './detail/contact-detail.component';
import { ContactsListComponent } from './list/contacts-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const contactRoutes: Routes = [
  {
    path: 'contact',
    component: ContactsListComponent
  },
  {
    path: 'contact/save',
    component: ContactDetailComponent
  },
  {
    path: 'contact/save/:id',
    component: ContactDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [
    RouterModule // é preciso importar para usar o recurso routerLink funcionar
  ]
})
export class ContactRoutingModule {}
