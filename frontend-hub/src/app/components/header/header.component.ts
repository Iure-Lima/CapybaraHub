import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
