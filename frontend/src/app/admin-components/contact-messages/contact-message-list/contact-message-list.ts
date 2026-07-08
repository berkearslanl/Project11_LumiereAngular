import { Component, inject } from '@angular/core';
import { ContactMessageService } from '../../../services/contact-message-service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-message-list',
  standalone: false,
  templateUrl: './contact-message-list.html',
  styleUrl: './contact-message-list.css',
})
export class ContactMessageList {
  private contactMessageService = inject(ContactMessageService);
  private router = inject(Router);
  contactMessages = toSignal(this.contactMessageService.getContactMessages());

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
        this.contactMessageService.deleteContactMessage(id).subscribe({
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
