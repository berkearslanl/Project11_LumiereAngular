import { Component, inject } from '@angular/core';
import { ContactInfoService } from '../../../services/contact-info-service';
import * as alertifyjs from 'alertifyjs'; //alertify
import { Router } from '@angular/router';
import { ContactInfo } from '../../../models/contactinfo';
@Component({
  selector: 'app-contact-info-create',
  standalone: false,
  templateUrl: './contact-info-create.html',
  styleUrl: './contact-info-create.css',
})
export class ContactInfoCreate {
   private contactInfoService = inject(ContactInfoService);
  private router = inject(Router);

  contactInfo: ContactInfo = new ContactInfo();

  create() {
    this.contactInfoService.createContactInfo(this.contactInfo).subscribe({
      complete: () => {
        alertifyjs.success('İletişim bilgisi başarıyla eklendi.');
        this.router.navigate(['/admin/contact-infoes']);
      },
      error: (err) => {
        alertifyjs.error('Bir hata meydana geldi.');
        console.log(err);
      },
    });
  }}
