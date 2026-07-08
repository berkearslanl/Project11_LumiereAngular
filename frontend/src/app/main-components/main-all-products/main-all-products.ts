import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryService } from '../../services/category-service';

@Component({
  selector: 'app-main-all-products',
  standalone: false,
  templateUrl: './main-all-products.html',
  styleUrl: './main-all-products.css',
})
export class MainAllProducts {
  private prdctService = inject(ProductService);
  private ctgrService = inject(CategoryService);
  products = toSignal(this.prdctService.getProducts());
  categories = toSignal(this.ctgrService.getCategories());

  selectedCategoryId = signal<number | null>(null);

  filteredProducts = computed(() => {
    const products = this.products() ?? [];
    const categoryId = this.selectedCategoryId();
    if (categoryId == null) return products;
    return products.filter((p) => p.categoryId == categoryId);
  });

  selectCategory(categoryId: number | null) {
    this.selectedCategoryId.set(categoryId);
  }
}
