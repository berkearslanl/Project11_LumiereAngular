import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-product',
  standalone: false,
  templateUrl: './main-product.html',
  styleUrl: './main-product.css',
})
export class MainProduct {
  private prdctService = inject(ProductService);

  products = toSignal(this.prdctService.getProductsLast4());
}
