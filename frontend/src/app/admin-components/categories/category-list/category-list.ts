import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-category-list',
  standalone: false,
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  private ctgrService = inject(CategoryService);

  categories = toSignal(this.ctgrService.getCategories()); //arka planda bir değişiklik olup olmadığını sürekli kontrol eder

  delete(id) {
    this.ctgrService.deleteCategory(id).subscribe({
      complete: () => {
        window.location.reload();
      },
      error: (err) => console.log(err),
    });
  }
}
