import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../../services/auth/auth.service';
import { LoginService } from '../../../../services/auth/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule,ButtonModule, ReactiveFormsModule,PasswordModule,FloatLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private login: LoginService, private auth: AuthService){}

  @Output() event = new EventEmitter<string>();


  formLogin = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  onSubmitLogin(){
    if (this.formLogin.valid){
      const email:string = this.formLogin.get('email')?.value ?? "unknown";
      const password:string = this.formLogin.get('password')?.value ?? "unknown";
      this.login.login(email,password).subscribe(
        response => {
          this.auth.saveToken(response?.accessToken)
          this.event.emit('success');
        },
        error => {
          if (error.status === 401){
            this.event.emit('error');
          }
        }
      );
    }
  }

}
