import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service';
import { CategoryService } from '../../../services/category-service';
import { Router } from '@angular/router';
import { Product } from '../../../models/product';
import { toSignal } from '@angular/core/rxjs-interop';
import * as alertifyjs from 'alertifyjs'; //alertify

@Component({
  selector: 'app-product-update',
  standalone: false,
  templateUrl: './product-update.html',
  styleUrl: './product-update.css',
})
export class ProductUpdate implements OnInit {
  private prdctService = inject(ProductService);
  private ctgrService = inject(CategoryService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef); //sayfada herhangi bir değişiklik olduğunda anlık işlem gerçekleştirmek için

  product: Product = new Product();

  @Input() id: string;

  categories = toSignal(this.ctgrService.getCategories());

  ngOnInit(): void {
    this.prdctService.getProductById(this.id).subscribe({
      next: (data) => {
        ((this.product = data), this.cdr.detectChanges());
      },
    });
  }

  update() {
    this.prdctService.updateProduct(this.product.id, this.product).subscribe({
      complete: () => {
        alertifyjs.success('Güncelleme işlemi başarılı.');
        this.router.navigate(['/admin/products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
