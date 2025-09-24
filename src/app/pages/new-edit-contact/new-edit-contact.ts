import { Component, ElementRef, inject, input, OnInit, viewChild } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { Contact, NewContact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { Router } from '@angular/router';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-new-edit-contact',
  imports: [FormsModule],
  templateUrl: './new-edit-contact.html',
  styleUrl: './new-edit-contact.scss'
})
export class NewEditContact implements OnInit {
  contactsService = inject(ContactsService);
  router = inject(Router)
  errorEnBack = false;
  idContacto = input<number>();
  contactoOriginal:Contact|undefined = undefined;
  form = viewChild<ElementRef<Form>>('newContactForm');

  async ngOnInit() {
    if(this.idContacto()){
      this.contactoOriginal = await this.contactsService.getContactById(this.idContacto()!);
      firstName: this.contactoOriginal!.firstName
      lastName: this.contactoOriginal!.lastName
      address: this.contactoOriginal!.address
      email: this.contactoOriginal!.email
      image: this.contactoOriginal!.image
      number: this.contactoOriginal!.number
      company: this.contactoOriginal!.company
      isFavorite: this.contactoOriginal!.isFavorite
    }
  }

  async createContact(form:NgForm){
    this.errorEnBack = false;
    const nuevoContacto: NewContact ={
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      email: form.value.email,
      image: form.value.image,
      number: form.value.number,
      company: form.value.company,
      isFavorite: form.value.isFavorite
    }

    let res; await this.contactsService.createContact(nuevoContacto);
    if (!res) {
      this.errorEnBack = true;
      return
    };
    this.router.navigate(["/contacts", res.id]);
  } 
}

function viewChild<T>(arg0: string) {
  throw new Error('Function not implemented.');
}
