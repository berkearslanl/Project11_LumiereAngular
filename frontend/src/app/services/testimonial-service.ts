import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Testimonial } from '../models/testimonial';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://localhost:7000/api/Testimonials/';

  getTestimonials() {
    return this.http.get<Testimonial[]>(this.baseUrl);
  }

  getTestimonialById(id) {
    return this.http.get<Testimonial>(this.baseUrl + id); //bu sefer tek bir değer döneceği için [] eklemedik
  }

  updateTestimonial(id, model: Testimonial) {
    return this.http.put(this.baseUrl + id, model);
  }

  createTestimonial(model: Testimonial) {
    return this.http.post(this.baseUrl, model);
  }

  deleteTestimonial(id) {
    return this.http.delete(this.baseUrl + id);
  }
}
