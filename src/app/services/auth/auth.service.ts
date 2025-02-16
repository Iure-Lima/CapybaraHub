import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  saveToken(token:string){
    localStorage.setItem('accessToken', token);
  }

  getToken(): string | null{
    return localStorage.getItem('accessToken');
  }

  getUserId():string | null{
    const decodedToken = this.getDecodedToken();
    return decodedToken?.sub || null;
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
}
