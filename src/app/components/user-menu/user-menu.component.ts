import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Menu, MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { Alert } from '../../models/alert.model';
import { AuthenticationContainerComponent } from '../authentication-container/authentication-container.component';


@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [ToastModule, AuthenticationContainerComponent, MenuModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
  providers: [MessageService]
})
export class UserMenuComponent implements OnInit {
  authenticationContainerActive = false;
  userIsAuthenticated = true;
  @ViewChild('menu') menu!:Menu;
  optionsMenu: MenuItem[] | undefined

  constructor(private message: MessageService, private router: Router){}

  ngOnInit(): void {
    this.optionsMenu = [
      {
        label:"My Bookings",
        icon: 'pi pi-calendar-plus',
        command: () => this.router.navigate([""])
      },
      {
        label:'Profile',
        icon: 'pi pi-user',
        command: () => this.router.navigate([''])
      },
      {
        label: 'Logout',
        icon: 'pi pi-power-off',
        command: () => {
          this.userIsAuthenticated = false
        }
      }
    ];
  }

  toggleAuthenticationContainer() {
    this.authenticationContainerActive  = !this.authenticationContainerActive;
  }

  eventCloseAuthentication(){
    this.toggleAuthenticationContainer();
  }

  show(data: Alert){
    this.message.add(data)
    this.eventCloseAuthentication()
  }

  userEvent(event: Event){
    if (this.userIsAuthenticated){
      console.log(event)
      this.menu.toggle(event)
    }else{
      this.toggleAuthenticationContainer()
    }
  }
}
