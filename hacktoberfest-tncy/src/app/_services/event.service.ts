import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event } from '../_models/event';

/**
 * @summary Service to process and handle Event objects
 * @see Event
 */
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
  private events: Array<Event> = [];

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
          this.events = this.sortEventsByBeginningTime(this.events);
        },
        (error) => {
          console.log('Unable to load events:', error);
        },
      );
  }

  /**
   * @summary Get a number of current or upcoming events
   * @param take Number of events to fetch (default is 2)
   */
  public getCurrentEvents(take: number = 2): Array<Event> {
    return this.events.slice(0, take);
  }

  /**
   * @summary Get a collection of all events per room, ordered chronologically 
   */
  public getOrderedEventsPerRoom(): Map<string, Array<Event>> {
    const eventsFor = new Map<string, Array<Event>>();

    // Iterate over all events
    this.events.map((event: Event) => {
      // Adding the entry if this room is unknown so far
      if (! eventsFor.has(event.in)) {
        eventsFor.set(event.in, []);
      }

      // Append the new event to all the planned one for this room
      let newEventPlanning = eventsFor.get(event.in);
      newEventPlanning.push(event);

      // Replace the old planning by the new one
      eventsFor.set(event.in, newEventPlanning);
    });

    // Ordering all events of the room
    eventsFor.forEach(
      (value: Array<Event>, key: string, map: Map<string, Array<Event>>) => {
        map.set(key, this.sortEventsByBeginningTime(value));
    });

    return eventsFor;
  }

  private sortEventsByBeginningTime(events: Array<Event>): Array<Event> {
    this.events.sort(
      (a: Event, b: Event) => a.at <= b.at ? -1 : 1);

    return events;
  }

}
