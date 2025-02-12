import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  login(email: string, password: string): Observable<any> {
    if (!email || !password){
      throw new Error('Email e senha são obrigatórios.');
    }
    return this.http.post(`${environment.apiUrl}/auth/signin`, { email, password })
  }
}
