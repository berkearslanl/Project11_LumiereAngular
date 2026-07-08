import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  /**
   *
   */
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://localhost:7000/api/categories/';

  getCategories() {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getCategoryById(id) {
    return this.http.get<Category>(this.baseUrl + id); //bu sefer tek bir değer döneceği için [] eklemedik
  }

  updateCategory(id, model: Category) {
    return this.http.put(this.baseUrl + id, model);
  }

  createCategory(model: Category) {
    return this.http.post(this.baseUrl, model);
  }

  deleteCategory(id) {
    return this.http.delete(this.baseUrl + id);
  }
}
