import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Alert } from './models/alert.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, ToastModule],
  providers:[MessageService],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private messageService: MessageService){}

  sendMessage(message: Alert){
    this.messageService.add(message);
  }
}
