import { Component, inject } from '@angular/core';
import { ContactInfoService } from '../../../services/contact-info-service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-info-list',
  standalone: false,
  templateUrl: './contact-info-list.html',
  styleUrl: './contact-info-list.css',
})
export class ContactInfoList {
  private contactInfoService = inject(ContactInfoService);
  private router = inject(Router);
  contactInfos = toSignal(this.contactInfoService.getContactInfoes());

  delete(id) {
    Swal.fire({
      title: 'Silmek istediğinize emin misiniz?',
      text: 'Bu işlemi geri alamazsınız!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, sil!',
      cancelButtonText: 'İptal',
    }).then((result) => {
      if (result.isConfirmed)
        this.contactInfoService.deleteContactInfo(id).subscribe({
          complete: () => {
            Swal.fire({
              title: 'Başarılı!',
              text: 'Silme işlemi gerçekleştirildi.',
              icon: 'success',
            });
            window.location.reload();
          },
        });
    });
  }
}
