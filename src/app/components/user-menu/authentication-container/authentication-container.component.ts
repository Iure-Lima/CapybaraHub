import { Component, EventEmitter, Output } from '@angular/core';
import {TabViewModule} from "primeng/tabview"
import { DialogModule } from 'primeng/dialog';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@Component({
  selector: 'app-authentication-container',
  standalone: true,
  imports: [TabViewModule, DialogModule, LoginComponent, RegisterComponent],
  templateUrl: './authentication-container.component.html',
  styleUrl: './authentication-container.component.scss'
})
export class AuthenticationContainerComponent {
  visible = true;
  @Output() eventClose = new EventEmitter();

  toggleAuthenticationContainer() {
        this.visible  = !this.visible;
    }

  closeAuthenticationContainer() {
    this.toggleAuthenticationContainer();
    this.eventClose.emit();
  }

}
