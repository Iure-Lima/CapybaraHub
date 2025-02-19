import { Component, EventEmitter, Output } from '@angular/core';
import { type AbstractControl, FormControl, FormGroup, ReactiveFormsModule, type ValidationErrors, type ValidatorFn, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { UserRegister } from '../../../models/user.register.model';
import { AlertService } from '../../../services/alert/alert.service';
import { AuthService } from '../../../services/auth/auth.service';
import { RegisterService } from '../../../services/auth/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputTextModule,ButtonModule, ReactiveFormsModule,PasswordModule,FloatLabelModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?[0-9]{1,3}[-. ]?[0-9]{1,14}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required])
  },{validators:this.matchPasswords()})

  sendRegister = false;

  @Output() closeEvent = new EventEmitter();

  constructor(private register: RegisterService, private auth: AuthService, private alertService: AlertService){}

  onSubmitRegister(){
    if (this.registerForm.valid){
      this.sendRegister = true;
      const user: UserRegister = {
        name: this.registerForm.get('fullname')?.value ?? "unknown",
        email: this.registerForm.get('email')?.value ?? "unknown",
        phone: this.registerForm.get('phone')?.value ?? "unknown",
        password: this.registerForm.get('password')?.value ?? "unknown"
      }
      this.register.registerUser(user).subscribe({
        next: (response) =>{
          this.auth.saveToken(response?.accessToken)
          this.alertService.addAlert({severity:'success', summary:"Register Successfully", detail:"Your account has been registered"})
          this.closeRegister()
        },
        error:(error) =>{
          this.sendRegister = false
          if (error.status >= 400){
            this.alertService.addAlert({severity:'error', summary:"Register Failed", detail:""})
          }
        },
        complete: () => {this.sendRegister = false},
      })
    }
  }

  closeRegister(){
    this.closeEvent.emit();
  }

  matchPasswords(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { isEqual: true };
    };
  }

  get isEqual() {
    return this.registerForm.hasError('isEqual');
  }

}
