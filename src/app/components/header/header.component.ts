import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { UserMenuComponent } from "../user-menu/user-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, UserMenuComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
