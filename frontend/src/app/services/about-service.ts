import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://localhost:7000/api/abouts/';

  getAbouts() {
    return this.http.get<About[]>(this.baseUrl);
  }

  getAboutById(id) {
    return this.http.get<About>(this.baseUrl + id);
  }
  updateAbout(id, model: About) {
    return this.http.put(this.baseUrl + id, model);
  }
  createAbout(model: About) {
    return this.http.post(this.baseUrl, model);
  }
  deleteAbout(id) {
    return this.http.delete(this.baseUrl + id);
  }
}
