import type { Routes } from '@angular/router';
import { CardListComponent } from './page/card-list/card-list.component';
import { ReservationsComponent } from './page/reservations/reservations.component';

export const routes: Routes = [
  {path:"home", component: CardListComponent},
  {path: "reservations/:id", component: ReservationsComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", loadComponent: () => import("../app/page/not-found/not-found.component").then(m => m.NotFoundComponent)}
];
