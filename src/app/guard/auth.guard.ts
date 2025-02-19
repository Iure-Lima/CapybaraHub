import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AlertService } from '../services/alert/alert.service';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const alertService = inject(AlertService);

  const token = authService.getToken();

  if (token && authService.isTokenValid()) {
    return true;
  }
  alertService.addAlert({
    severity: 'error',
    summary: 'Authentication failed',
    detail: 'Please log in to make a reservation.'
  })
  router.navigate(['/home']);
  return false;
};
