import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactMessage } from '../models/contactmessage';

@Injectable({
  providedIn: 'root',
})
export class ContactMessageService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://localhost:7000/api/ContactMessages/';

  getContactMessages() {
    return this.http.get<ContactMessage[]>(this.baseUrl);
  }
  getContactMessageById(id) {
    return this.http.get<ContactMessage>(this.baseUrl + id);
  }
  updateContactMessage(id, model: ContactMessage) {
    return this.http.put(this.baseUrl + id, model);
  }
  createContactMessage(model: ContactMessage) {
    return this.http.post(this.baseUrl, model);
  }
  deleteContactMessage(id) {
    return this.http.delete(this.baseUrl + id);
  }
}
