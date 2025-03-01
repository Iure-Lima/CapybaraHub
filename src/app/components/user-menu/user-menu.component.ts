import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { Menu, MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { Alert } from '../../models/alert.model';
import { AuthService } from '../../services/auth/auth.service';
import { AuthenticationContainerComponent } from '../authentication-container/authentication-container.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    ToastModule,
    AuthenticationContainerComponent,
    MenuModule,
    AvatarModule,
    AvatarGroupModule,
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent implements OnInit {
  authenticationContainerActive = false;
  userIsAuthenticated = false;
  @ViewChild('menu') menu!: Menu;
  optionsMenu: MenuItem[] | undefined;

  constructor(
    private message: MessageService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.optionsMenu = [
      {
        label: 'My Bookings',
        icon: 'pi pi-calendar-plus',
        command: () => this.router.navigate(['booking-list']),
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        command: () => this.router.navigate(['']),
      },
      {
        label: 'Logout',
        icon: 'pi pi-power-off',
        command: () => {
          this.authService.logout();
          this.userIsAuthenticated = false;
        },
      },
    ];
  }

  toggleAuthenticationContainer() {
    this.authenticationContainerActive = !this.authenticationContainerActive;
  }

  eventCloseAuthentication() {
    this.toggleAuthenticationContainer();
  }

  show(data: Alert) {
    this.message.add(data);
    this.eventCloseAuthentication();
  }

  userEvent(event: Event) {
    this.userIsAuthenticated = this.authService.isTokenValid();
    if (this.userIsAuthenticated) {
      this.menu.toggle(event);
    } else {
      this.toggleAuthenticationContainer();
    }
  }
}
