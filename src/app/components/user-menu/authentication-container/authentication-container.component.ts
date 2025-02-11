import { Component, EventEmitter, Output } from '@angular/core';
import {TabViewModule} from "primeng/tabview"
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-authentication-container',
  standalone: true,
  imports: [TabViewModule, DialogModule,LoginComponent],
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
    console.log("oi")
    this.toggleAuthenticationContainer();
    this.eventClose.emit();
  }

}
