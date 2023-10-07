import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../../environments/environment';
import { Cat } from '../models/cat';
import { Observable, catchError, of } from 'rxjs';

@Injectable()
export class GeneralService {

  constructor(
    private http: HttpClient,
  ) {}

  catList(): Observable<Cat[]> {
    // The Cat Interceptro is in charge of adding the required headers for this module
    return this.http.get<Cat[]>(`${env.baseUrl}/breeds`).pipe(catchError((error) => {
      console.log('Error: ', error);
      const errorCat = {
        name: 'Error Cat',
        origin: 'Unknown',
        affection_level: 0,
        intelligence: 3.1415,
        reference_image_id: 'error',
        weight: {
          imperial: '0',
          metric: '0',
        },
        child_friendly: 2.7182,
        dog_friendly: 6.626,
        energy_level: 6.022,
        grooming: 1.380,
        health_issues: 299792,
      };
      return of([errorCat]);
    }));
  }
}
