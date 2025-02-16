import { Injectable } from '@angular/core';

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
}
