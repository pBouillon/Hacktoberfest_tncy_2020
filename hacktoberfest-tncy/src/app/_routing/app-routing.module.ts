import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { PlanningComponent } from '../planning/planning.component';
import { AppRoute } from './AppRoute';

const routes: Routes = [
  // Main menu
  { path: AppRoute.Home, component: HomeComponent },

  // Leaderboard
  { path: AppRoute.Leaderboard, component: LeaderboardComponent },

  // Planning
  { path: AppRoute.Planning, component: PlanningComponent },
  
  // On unknown route, redirect to menu
  { path: '**', redirectTo: AppRoute.Home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
