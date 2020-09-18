import { Component, OnInit } from '@angular/core';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  constructor(public eventService: EventService) { }

  ngOnInit(): void {
  }

}
