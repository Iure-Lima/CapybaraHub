import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HotelListComponent } from "./components/hotel-list/hotel-list.component";
import { SearchComponent } from './components/search/search.component';
import { Alert } from './models/alert.model';
import { AlertService } from './services/alert/alert.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    ToastModule,
    SearchComponent,
    FilterComponent,
    HotelListComponent
],
  providers: [MessageService],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private alertService: AlertService,
    public router: Router,
  ) {}
  ngOnInit(): void {
    this.alertService.alertObservable.subscribe((alert) => {
      if (alert) {
        this.sendMessage(alert);
      }
    });
  }

  sendMessage(message: Alert) {
    this.messageService.add(message);
  }
}
