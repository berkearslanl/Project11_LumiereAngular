import { Component, inject } from '@angular/core';
import { TestimonialService } from '../../../services/testimonial-service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-testimonial-list',
  standalone: false,
  templateUrl: './testimonial-list.html',
  styleUrl: './testimonial-list.css',
})
export class TestimonialList {
  private testimonialService = inject(TestimonialService);
  private router = inject(Router);
  testimonials = toSignal(this.testimonialService.getTestimonials());
  stars = [1, 2, 3, 4, 5];

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
        this.testimonialService.deleteTestimonial(id).subscribe({
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
