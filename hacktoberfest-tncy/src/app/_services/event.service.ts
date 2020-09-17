import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event } from '../_models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  /**
   * @summary Path to the JSON file containing all events
   */
  private eventsSourcePath = 'assets/data/events.json';

  /**
   * @summary List of all planned events
   */
  private events: Array<Event>;

  /**
   * Create a new instance, initialize `events` on creation 
   * @param http HttpClient used for JSON handling
   */
  constructor(private http: HttpClient) { 
    // Retrieve current timestamp in seconds
    const currentTimestamp = Math.floor(Date.now() / 1000);
    
    // Retrieve events
    this.http
      .get(this.eventsSourcePath)
      .subscribe(
        (data) => {
          // Deserializing events
          this.events = data as Array<Event>;

          // Skip all past events
          this.events.filter(
            (event: Event) => event.at + event.for < currentTimestamp);

          // Sorting them by starting time
          this.events.sort(
            (a: Event, b: Event) => a.at <= b.at ? -1 : 1);
        },
        (error) => {
          console.log('Unable to load events:', error);
        },
      );
  }

  /**
   * @summary Get a number of current or upcoming events
   * @param take Number of events to fetch (default is 3)
   */
  public getCurrentEvents(take: number = 3): Array<Event> {
    return this.events.slice(0, take);
  }

}
