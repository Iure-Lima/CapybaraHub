import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from "primeng/tabview";
import { ToastModule } from 'primeng/toast';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@Component({
  selector: 'app-authentication-container',
  standalone: true,
  imports: [TabViewModule, DialogModule, LoginComponent, RegisterComponent,ToastModule],
  templateUrl: './authentication-container.component.html',
  styleUrl: './authentication-container.component.scss',
  providers:[MessageService]
})
export class AuthenticationContainerComponent {
  visible = true;
  @Output() eventClose = new EventEmitter();

  constructor(private message: MessageService) { }

  toggleAuthenticationContainer() {
        this.visible  = !this.visible;
    }

  closeAuthenticationContainer() {
    this.toggleAuthenticationContainer();
    this.eventClose.emit();
  }

  showError(){
    this.message.add({severity: 'error', summary:'Invalid Credentials', detail:'invalid credentials'})
  }

}
