import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propriety } from '../models/propriety.interface';
import { Observable } from 'rxjs';
import { Query } from '../models/query.interface';

@Injectable({
  providedIn: 'root',
})
export class ProprietiesService {
  constructor(private http: HttpClient) {}

  getProperties(query: Query): Observable<Propriety> {
    let headers = new HttpHeaders()
      .set(
        'x-rapidapi-key',
        'dfed1fe205msha0071a980bab50bp1a1b11jsnb5a4512f905a'
      )
      .set('x-rapidapi-host', 'airbnb13.p.rapidapi.com');
    let url = `https://airbnb13.p.rapidapi.com/search-location?location=${query.location}&checkin=${query.checkin}&checkout=${query.checkout}&adults=${query.adults}&children=0&infants=0&page=1`;
    return this.http.get<Propriety>(url, { headers });
  }
}
