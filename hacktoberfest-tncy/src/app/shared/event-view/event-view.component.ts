import { Component, Input } from '@angular/core';

import { Event } from 'src/app/_models/event';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent {

  @Input() event: Event;

  constructor() { }

}
