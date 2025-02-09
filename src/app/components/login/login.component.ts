import { Component } from '@angular/core';
import { LoginContainerComponent } from './login-container/login-container.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginContainerComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginContainerActive = false;

  toggleLoginContainer() {
    this.loginContainerActive = !this.loginContainerActive;
  }

  receiveLogin(data: { email: string; password: string }) {
    console.log('Received login:', data);
    this.toggleLoginContainer();
  }
}
