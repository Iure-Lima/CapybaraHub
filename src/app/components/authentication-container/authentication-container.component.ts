import { Component, EventEmitter, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from "primeng/tabview";
import { Alert } from '../../models/alert.model';
import { AlertService } from '../../services/alert/alert.service';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@Component({
  selector: 'app-authentication-container',
  standalone: true,
  imports: [TabViewModule, DialogModule, LoginComponent, RegisterComponent],
  templateUrl: './authentication-container.component.html',
  styleUrl: './authentication-container.component.scss',
  providers:[]
})
export class AuthenticationContainerComponent {
  visible = true;
  @Output() eventClose = new EventEmitter();
  @Output() eventAuth = new EventEmitter<Alert>();

  constructor(private alertService: AlertService) { }

  toggleAuthenticationContainer() {
        this.visible  = !this.visible;
    }

  closeAuthenticationContainer() {
    this.toggleAuthenticationContainer();
    this.eventClose.emit();
  }

  showMessage(data:Alert){
    if (data?.severity === 'success'){
      this.alertService.addAlert(data)
      this.eventAuth.emit(data);
    }else if (data?.severity === 'error'){
      this.alertService.addAlert(data)
    }
  }

}
