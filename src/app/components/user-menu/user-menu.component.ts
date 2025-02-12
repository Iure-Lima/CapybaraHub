import { Component } from '@angular/core';
import { AuthenticationContainerComponent } from './authentication-container/authentication-container.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [AuthenticationContainerComponent],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {
  authenticationContainerActive = false;

  toggleAuthenticationContainer() {
    this.authenticationContainerActive  = !this.authenticationContainerActive;
  }

  eventCloseAuthentication(){
    this.toggleAuthenticationContainer();
  }
}
