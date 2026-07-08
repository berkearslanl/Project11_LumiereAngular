import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';
import { ContactMessageService } from '../../../services/contact-message-service';
import { ContactMessage } from '../../../models/contactmessage';
@Component({
  selector: 'app-contact-message-create',
  standalone: false,
  templateUrl: './contact-message-create.html',
  styleUrl: './contact-message-create.css',
})
export class ContactMessageCreate {
  private contactMessageService = inject(ContactMessageService);
  private router = inject(Router);

  contactMessage: ContactMessage = new ContactMessage();

  create() {
    this.contactMessageService.createContactMessage(this.contactMessage).subscribe({
      complete: () => {
        alertifyjs.success('İletişim mesajı başarıyla eklendi.');
        this.router.navigate(['/admin/contact-messages']);
      },
      error: (err) => {
        alertifyjs.error('Bir hata meydana geldi.');
        console.log(err);
      },
    });
  }
}
