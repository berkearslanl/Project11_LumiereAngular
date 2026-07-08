import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature } from '../models/feature';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://localhost:7000/api/Features/';

  getFeatures() {
    return this.http.get<Feature[]>(this.baseUrl);
  }

  getFeatureById(id) {
    return this.http.get<Feature>(this.baseUrl + id); //bu sefer tek bir değer döneceği için [] eklemedik
  }

  updateFeature(id, model: Feature) {
    return this.http.put(this.baseUrl + id, model);
  }

  createFeature(model: Feature) {
    return this.http.post(this.baseUrl, model);
  }

  deleteFeature(id) {
    return this.http.delete(this.baseUrl + id);
  }
}
