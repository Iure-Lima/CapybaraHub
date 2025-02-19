import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from "./components/search/search.component";
import { Alert } from './models/alert.model';
import { AlertService } from './services/alert/alert.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, ToastModule, SearchComponent],
  providers:[MessageService],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  constructor(private messageService: MessageService, private alertService:AlertService){}
  ngOnInit(): void {
    this.alertService.alertObservable.subscribe(alert =>{
      if(alert){
        this.sendMessage(alert)
      }
    })
  }

  sendMessage(message: Alert){
    this.messageService.add(message);
  }
}
