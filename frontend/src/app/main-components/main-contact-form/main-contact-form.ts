import { Component, inject } from '@angular/core';
import { ContactMessageService } from '../../services/contact-message-service';
import { Router } from '@angular/router';
import { ContactMessage } from '../../models/contactmessage';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-main-contact-form',
  standalone: false,
  templateUrl: './main-contact-form.html',
  styleUrl: './main-contact-form.css',
})
export class MainContactForm {
  private contactMessageService = inject(ContactMessageService);
  private router = inject(Router);

  contactMessage: ContactMessage = new ContactMessage();

  create() {
    this.contactMessageService.createContactMessage(this.contactMessage).subscribe({
      complete: () => {
        alertifyjs.success('Mesajınız başarıyla gönderildi.');
      },
      error: (err) => {
        alertifyjs.error('Bir hata meydana geldi.');
        console.log(err);
      },
    });
  }
}
