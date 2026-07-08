import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactInfo } from '../models/contactinfo';

@Injectable({
  providedIn: 'root',
})
export class ContactInfoService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://localhost:7000/api/ContactInfoes/';

  getContactInfoes() {
    return this.http.get<ContactInfo[]>(this.baseUrl);
  }
  getContactInfoById(id) {
    return this.http.get<ContactInfo>(this.baseUrl + id);
  }
  updateContactInfo(id, model: ContactInfo) {
    return this.http.put(this.baseUrl + id, model);
  }
  createContactInfo(model: ContactInfo) {
    return this.http.post(this.baseUrl, model);
  }
  deleteContactInfo(id) {
    return this.http.delete(this.baseUrl + id);
  }
}
