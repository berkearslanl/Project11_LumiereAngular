import { Component, inject } from '@angular/core';
import { AboutService } from '../../../services/about-service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-list',
  standalone: false,
  templateUrl: './about-list.html',
  styleUrl: './about-list.css',
})
export class AboutList {
  private aboutService = inject(AboutService);
  private router = inject(Router);
  abouts = toSignal(this.aboutService.getAbouts());

  delete(id) {
    Swal.fire({
      title: 'Silmek istediğinize emin misiniz?',
      text: 'Bu işlemi geri alamazsınız!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Evet, sil!',
      cancelButtonText: 'İptal',
    }).then((result) => {
      if (result.isConfirmed)
        this.aboutService.deleteAbout(id).subscribe({
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
