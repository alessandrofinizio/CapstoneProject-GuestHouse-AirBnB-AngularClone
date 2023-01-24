import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Host } from '../models/host.interface';


@Injectable({
  providedIn: 'root'
})


export class HostService {

  constructor(private http: HttpClient ) { }

  getHosts(): Observable<Host[]> {
    return this.http.get<Host[]>('http://localhost:4201/host');
}

  addHost(data: Partial <Host>) {
    return this.http.post('http://localhost:4201/host',  data);
  }

  updateHost(host: Host) {
    return this.http.put<Host>(`http://localhost:4201/host/${host.id}`, host);
  }

}


