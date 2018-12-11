import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, ContactsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
