import { Component } from '@angular/core';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public eventService: EventService) { }

}
