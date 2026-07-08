import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';
import { ContactInfoService } from '../../../services/contact-info-service';
import { ContactInfo } from '../../../models/contactinfo';
@Component({
  selector: 'app-contact-info-update',
  standalone: false,
  templateUrl: './contact-info-update.html',
  styleUrl: './contact-info-update.css',
})
export class ContactInfoUpdate implements OnInit {
  private contactInfoService = inject(ContactInfoService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef); //sayfada herhangi bir değişiklik olduğunda anlık işlem gerçekleştirmek için

  contactInfo: ContactInfo = new ContactInfo();

  @Input() id: string;

  ngOnInit(): void {
    this.contactInfoService.getContactInfoById(this.id).subscribe({
      next: (data) => {
        ((this.contactInfo = data), this.cdr.detectChanges());
      },
    });
  }

  update() {
    this.contactInfoService.updateContactInfo(this.contactInfo.id, this.contactInfo).subscribe({
      complete: () => {
        alertifyjs.success('Güncelleme işlemi başarılı.');
        this.router.navigate(['/admin/contactInfoes']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
