import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Alert } from '../../models/alert.model';
import { AuthenticationContainerComponent } from '../authentication-container/authentication-container.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [ToastModule, AuthenticationContainerComponent],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
  providers: [MessageService]
})
export class UserMenuComponent {
  authenticationContainerActive = false;

  constructor(private message: MessageService){}

  toggleAuthenticationContainer() {
    this.authenticationContainerActive  = !this.authenticationContainerActive;
  }

  eventCloseAuthentication(){
    this.toggleAuthenticationContainer();
  }

  show(data: Alert){
    this.message.add(data)
    this.eventCloseAuthentication()
  }
}
