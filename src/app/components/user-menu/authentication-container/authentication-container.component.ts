import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from "primeng/tabview";
import { ToastModule } from 'primeng/toast';
import { Alert } from '../../../models/alert.model';
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
  @Output() eventAuth = new EventEmitter<Alert>();

  constructor(private message: MessageService) { }

  toggleAuthenticationContainer() {
        this.visible  = !this.visible;
    }

  closeAuthenticationContainer() {
    this.toggleAuthenticationContainer();
    this.eventClose.emit();
  }

  showMessage(data:Alert){
    if (data?.severity === 'success'){
      this.eventAuth.emit(data);
    }else if (data?.severity === 'error'){
      this.message.add(data)
    }
  }

}
