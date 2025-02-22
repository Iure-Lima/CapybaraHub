import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AlertService } from '../../../services/alert/alert.service';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    PasswordModule,
    FloatLabelModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  sendLogin = false;

  constructor(
    private login: LoginService,
    private auth: AuthService,
    private alertService: AlertService,
  ) {}

  @Output() eventCancelled = new EventEmitter();

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  eventCancel() {
    this.formLogin.reset();
    this.eventCancelled.emit();
  }

  onSubmitLogin() {
    if (this.formLogin.valid) {
      this.sendLogin = true;
      const email: string = this.formLogin.get('email')?.value ?? 'unknown';
      const password: string =
        this.formLogin.get('password')?.value ?? 'unknown';
      this.login.login(email, password).subscribe({
        next: (response) => {
          this.auth.saveToken(response?.accessToken);
          this.alertService.addAlert({
            severity: 'success',
            summary: 'Login Successfully',
            detail: '',
          });
          this.eventCancel();
        },
        error: (error) => {
          this.sendLogin = false;
          if (error.status === 401) {
            this.alertService.addAlert({
              severity: 'error',
              summary: 'Login Failed',
              detail: 'Invalid Credentials',
            });
          }
        },
        complete: () => {
          this.sendLogin = false;
        },
      });
    }
  }
}
