import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<object> {
    if (!email || !password){
      throw new Error('Email e senha são obrigatórios.');
    }
    return this.http.post(`${environment.apiUrl}/auth/signin`, { email, password }).pipe()
  }
}
