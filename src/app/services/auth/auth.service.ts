import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  saveToken(token:string){
    localStorage.setItem('accessToken', token);
  }
}
