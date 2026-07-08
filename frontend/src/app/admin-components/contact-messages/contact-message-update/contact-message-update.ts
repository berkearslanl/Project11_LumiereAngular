import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import * as alertifyjs from 'alertifyjs';
import { ContactMessageService } from '../../../services/contact-message-service';
import { Router } from '@angular/router';
import { ContactInfo } from '../../../models/contactinfo';
import { ContactMessage } from '../../../models/contactmessage';
@Component({
  selector: 'app-contact-message-update',
  standalone: false,
  templateUrl: './contact-message-update.html',
  styleUrl: './contact-message-update.css',
})
export class ContactMessageUpdate implements OnInit {
  private contactMessageService = inject(ContactMessageService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef); //sayfada herhangi bir değişiklik olduğunda anlık işlem gerçekleştirmek için

  contactMessage: ContactMessage = new ContactMessage();

  @Input() id: string;

  ngOnInit(): void {
    this.contactMessageService.getContactMessageById(this.id).subscribe({
      next: (data) => {
        ((this.contactMessage = data), this.cdr.detectChanges());
      },
    });
  }

  update() {
    this.contactMessageService
      .updateContactMessage(this.contactMessage.id, this.contactMessage)
      .subscribe({
        complete: () => {
          alertifyjs.success('Güncelleme işlemi başarılı.');
          this.router.navigate(['/admin/contactMessages']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
