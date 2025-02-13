import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserRegister } from '../../models/user.register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient){}

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  registerUser(user: UserRegister): Observable<any> {
    console.log(user)
    return this.http.post(`${environment.apiUrl}/auth/signup`, user)
  }

}
