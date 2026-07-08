import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { Router } from '@angular/router';
import { Category } from '../../../models/category';


@Component({
  selector: 'app-category-create',
  standalone: false,
  templateUrl: './category-create.html',
  styleUrl: './category-create.css',
})
export class CategoryCreate {
  private ctgrService = inject(CategoryService);
  private router = inject(Router);

  category: Category = new Category(); //başlangıçta içi boş bir kategori modeli

  create() {
    this.ctgrService.createCategory(this.category).subscribe({
      complete: () => {
        this.router.navigate(['/admin/categories']);
      },
      error: (err) => console.log(err),
    });
  }
}
