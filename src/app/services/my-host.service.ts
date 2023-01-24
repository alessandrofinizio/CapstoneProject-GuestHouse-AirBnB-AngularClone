import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyHost } from '../models/my-host.interface';

@Injectable({
  providedIn: 'root'
})
export class MyHostService {

  constructor(private http : HttpClient) { }

  getMyHosts(): Observable<MyHost[]>{
    return this.http.get<MyHost[]>('http://localhost:4201/myHost');
  }
  addMyHost(newHost: Partial<MyHost>){
    return this.http.post<MyHost[]>('http://localhost:4201/myHost', newHost);
  }
}
