import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { UserMenuComponent } from "../user-menu/user-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, UserMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
