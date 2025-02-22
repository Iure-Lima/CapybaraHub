import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
}
