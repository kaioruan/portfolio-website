import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

interface  Contact {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  Contact : Contact = {
    name: '',
    email: '',
    message: '',
  }

  name = new FormControl('', Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  message = new FormControl('', Validators.minLength(3));
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  validateSubmit() {
    return this.name.valid && this.email.valid && this.message.valid;
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_ltpnm7k', 'template_p0gq4b1', e.target as HTMLFormElement, '_7lMpmHyMILY-S8RO')
        Swal.fire({
          title: 'Enviado!',
          text: 'Email foi enviado com sucesso, entrarei em contato o mais breve possível!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.Contact.name = '';
        this.Contact.email = '';
        this.Contact.message = '';
  }
}
