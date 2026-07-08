import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { FeatureService } from '../../../services/feature-service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-feature-list',
  standalone: false,
  templateUrl: './feature-list.html',
  styleUrl: './feature-list.css',
})
export class FeatureList {
  private featureService = inject(FeatureService);
  private router = inject(Router);
  features = toSignal(this.featureService.getFeatures());

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
        this.featureService.deleteFeature(id).subscribe({
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
