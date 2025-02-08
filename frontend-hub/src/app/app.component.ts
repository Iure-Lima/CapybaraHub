import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
// biome-ignore lint/style/useImportType: <explanation>
import { MockDataService } from './services/mock-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private dataService:MockDataService){
    console.log(this.dataService.getHotels());
  }
}
