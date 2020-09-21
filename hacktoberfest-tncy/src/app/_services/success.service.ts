import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Success } from '../_models/success';

/**
 * @summary Service to process and handle Success objects
 * @see Success
 */
@Injectable({
  providedIn: 'root'
})
export class SuccessService {

  /**
   * @summary Path to the JSON file containing all successes
   */
  private _successesSourcePath = 'assets/data/successes.json';

  /**
   * @summary List of all successes
   */
  private _successes: Array<Success> = [];

  /**
   * Create a new instance, initialize `_successes` on creation 
   * @param _http HttpClient used for JSON handling
   */
  constructor(private _http: HttpClient) {
    this._http
      .get(this._successesSourcePath)
      .subscribe(
        (data) => {
          this._successes = data as Array<Success>;
        },
        (error) => {
          console.log('Unable to load successes', error);
        }
      );
  }

  get successes(): Array<Success> {
    return this._successes;
  }

}
