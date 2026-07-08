import { Component, inject } from '@angular/core';
import { ContactInfoService } from '../../services/contact-info-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-contact-info',
  standalone: false,
  templateUrl: './main-contact-info.html',
  styleUrl: './main-contact-info.css',
})
export class MainContactInfo {
  private contactInfoService = inject(ContactInfoService);

  contactInfoes = toSignal(this.contactInfoService.getContactInfoes());
}
