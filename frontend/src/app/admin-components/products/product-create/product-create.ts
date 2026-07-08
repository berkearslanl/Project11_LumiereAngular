import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product-service';
import { CategoryService } from '../../../services/category-service';
import { Product } from '../../../models/product';
import { toSignal } from '@angular/core/rxjs-interop';
import * as alertifyjs from 'alertifyjs'; //alertify

@Component({
  selector: 'app-product-create',
  standalone: false,
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate {
  private prdctService = inject(ProductService);
  private ctgrService = inject(CategoryService);
  private router = inject(Router);

  product: Product = new Product();

  categories = toSignal(this.ctgrService.getCategories());

  create() {
    this.prdctService.createProduct(this.product).subscribe({
      complete: () => {
        alertifyjs.success('Ürün başarıyla eklendi.');
        this.router.navigate(['/admin/products']);
      },
      error: (err) => {
        alertifyjs.error('Bir hata meydana geldi.');
        console.log(err);
      },
    });
  }
}
