import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserRegister } from '../../models/user.register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  saveToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getUserId(): string | null {
    const decodedToken = this.getDecodedToken();
    return decodedToken?.sub || null;
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  getDecodedToken(): any {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode(token);
    } catch (error) {
      return null;
    }
  }
  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) return false;
    return this.isTokenValidJWT(token);
  }

  isTokenValidJWT(token: string): boolean {
    try {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const decoded: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    } catch (error) {
      return false;
    }
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/signin`, {
      email,
      password,
    });
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  registerUser(user: UserRegister): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/signup`, user);
  }
}
