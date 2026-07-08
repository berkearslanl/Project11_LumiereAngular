import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product-service';
import { toSignal } from '@angular/core/rxjs-interop';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private prdctService = inject(ProductService);
  private router = inject(Router);
  products = toSignal(this.prdctService.getProducts());

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
        this.prdctService.deleteProduct(id).subscribe({
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
