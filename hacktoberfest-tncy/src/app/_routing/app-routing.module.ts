import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AppRoute } from './AppRoute';

const routes: Routes = [
  // Main menu
  { path: AppRoute.Home, component: HomeComponent },
  
  // On unknown route, redirect to menu
  { path: '**', redirectTo: AppRoute.Home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
