import type { Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

export const routes: Routes = [
  {path:"home", component: CardListComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", component: NotFoundComponent}
];
