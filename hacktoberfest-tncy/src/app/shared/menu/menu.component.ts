import { Component, OnInit } from '@angular/core';
import { AppRoute } from 'src/app/_routing/AppRoute';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  home: string = AppRoute.Home;
  leaderboard: string = AppRoute.Leaderboard;
  planning: string = AppRoute.Planning;

  constructor() { }

  ngOnInit(): void {
  }

}
