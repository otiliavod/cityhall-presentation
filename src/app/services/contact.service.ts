import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;

  // honeypot (hidden field)
  company?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly baseUrl = 'http://localhost:3001'; // dev only

  constructor(private http: HttpClient) {}

  send(payload: ContactPayload): Observable<{ ok: boolean; errors?: string[] }> {
    return this.http.post<{ ok: boolean; errors?: string[] }>(`${this.baseUrl}/api/contact`, payload);
  }
}
