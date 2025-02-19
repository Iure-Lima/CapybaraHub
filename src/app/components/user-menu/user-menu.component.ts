import { Component, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { ToastModule } from 'primeng/toast';
import { Alert } from '../../models/alert.model';
import { AuthenticationContainerComponent } from '../authentication-container/authentication-container.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [ToastModule, AuthenticationContainerComponent, OverlayPanelModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
  providers: [MessageService]
})
export class UserMenuComponent {
  authenticationContainerActive = false;
  userIsAuthenticated = true;
  @ViewChild('op') overlayPanel!: OverlayPanel;
  @ViewChild('target', { static: true }) targetElement!: ElementRef;

  constructor(private message: MessageService){}

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
      if (this.overlayPanel){}
      this.overlayPanel.toggle(event, this.targetElement.nativeElement);
    }else{
      this.toggleAuthenticationContainer()
    }
  }
}
