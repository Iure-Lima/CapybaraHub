import type { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { CardListComponent } from './page/card-list/card-list.component';

export const routes: Routes = [
  {path:"home", component: CardListComponent},
  {path: "reservations/:id", loadComponent: () => import("./page/reservations/reservations.component").then(m => m.ReservationsComponent)},
  {path:"booking/:id", loadComponent: () => import('./page/booking/booking.component').then(m => m.BookingComponent), canActivate:[authGuard]},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", loadComponent: () => import("../app/page/not-found/not-found.component").then(m => m.NotFoundComponent)}
];
