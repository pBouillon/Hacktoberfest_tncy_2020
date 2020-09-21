import { Component } from '@angular/core';
import { SuccessService } from '../_services/success.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {

  constructor(public successService: SuccessService) { }

}
