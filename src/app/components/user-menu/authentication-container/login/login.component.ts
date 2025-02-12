import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoginService } from '../../../../services/auth/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule,ButtonModule, ReactiveFormsModule,PasswordModule,FloatLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private login: LoginService){}

  @Output() event = new EventEmitter();


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
          console.log('Login bem-sucedido!', response);
        },
        error => {
          if (error.status === 401){
            this.event.emit();
          }
        }
      );
    }
  }

}
