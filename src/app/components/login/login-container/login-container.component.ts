import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, type NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent {
  email = "";
  password = "";

  @Output() login = new EventEmitter<{email:string,password:string}>();

  onSubmit(form:NgForm){
    if (form.valid) {
      this.login.emit(form.value);
      form.resetForm();
    }
  }

}
