import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, LoginComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
