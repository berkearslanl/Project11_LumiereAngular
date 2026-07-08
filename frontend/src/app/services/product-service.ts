import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:7000/api/products/';
  getProducts() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductsLast4() {
    return this.http.get<Product[]>(this.baseUrl + 'GetProductLast4');
  }

  getProductById(id) {
    return this.http.get<Product>(this.baseUrl + id);
  }

  createProduct(model: Product) {
    return this.http.post(this.baseUrl, model);
  }

  updateProduct(id, model: Product) {
    return this.http.put(this.baseUrl + id, model);
  }

  deleteProduct(id) {
    return this.http.delete(this.baseUrl + id);
  }
}
