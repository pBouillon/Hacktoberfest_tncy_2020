
/**
 * @summary Represent an event that will occur on a certain date, for a limited
 *          time
 */
export class Event {

    /**
     * @summary Name of the event
     */
    name: string;
    
    /**
     * @summary Timestamp corresponding to the beginning of the event
     */
    at: number;

    /**
     * @summary Duration of the event in seconds
     */
    for: number;

    /**
     * @summary Organizer of the event
     */
    by: string;

    /**
     * @summary Location in which the event take place
     */
    in: string;

    /**
     * @summary Short description of this event
     */
    summary: string;

}
