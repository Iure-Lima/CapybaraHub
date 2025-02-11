import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TabViewModule, InputTextModule,ButtonModule, DialogModule, ReactiveFormsModule,PasswordModule,FloatLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  onSubmitLogin(){
    if (this.formLogin.invalid){
      console.log("Please enter")
    } else {
      console.log("Login Successful!")
    }
  }

}
