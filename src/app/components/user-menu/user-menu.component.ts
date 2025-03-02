import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { Menu, MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { AlertService } from '../../services/alert/alert.service';
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
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
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
          this.showLogoutMessage();
        },
      },
    ];
  }

  toggleAuthenticationContainer() {
    this.authenticationContainerActive = !this.authenticationContainerActive;
  }

  showLogoutMessage(){
    this.alertService.addAlert({
      severity: 'info',
      summary: 'Logout',
      detail: 'You are successfully logged out',
    });
    this.router.navigate(['/home']);

  }

  eventCloseAuthentication() {
    this.toggleAuthenticationContainer();
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
