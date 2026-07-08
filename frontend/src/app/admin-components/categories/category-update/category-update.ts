import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { Category } from '../../../models/category';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-category-update',
  standalone: false,
  templateUrl: './category-update.html',
  styleUrl: './category-update.css',
})
export class CategoryUpdate implements OnInit {
  @Input() id: string;

  category: Category = new Category();

  private ctgrService = inject(CategoryService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);

  //veri getirme metodu
  ngOnInit(): void {
    this.ctgrService.getCategoryById(this.id).subscribe({
      //istek başarılı olursa gerçekleşicek işlem
      next: (data) => {
        this.category = data;
        this.cdr.detectChanges(); //herhangi bir değişiklik olduğunda bunu hemen algıla
      },
      //başarısız olursa
      error: (err) => console.log(err),
    });
  }

  //güncelleme metodu
  update() {
    this.ctgrService.updateCategory(this.id, this.category).subscribe({
      complete: () => {
        alertifyjs.success('Güncelleme işlemi başarılı.');
        this.router.navigate(['admin/categories']);
      },
      error: (err) => console.log(err),
    });
  }
}
