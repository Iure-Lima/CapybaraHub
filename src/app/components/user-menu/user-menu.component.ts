import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {
  loginContainerActive = false;

  toggleLoginContainer() {
    this.loginContainerActive  = !this.loginContainerActive;
  }

  receiveLogin(data: {email:string, password:string}){
    console.log('Received login:', data);
    this.toggleLoginContainer();
  }

}
