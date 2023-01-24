import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

export interface AuthData { // da spostare in un'interfaccia
  accessToken: string;
  user: {
    id: number,
    name: string,
    cognome: string,
    email: string,
    password: string
  };
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();
  url = "http://localhost:4201";
  private authSubj = new BehaviorSubject<null|AuthData>(null);

  users$ = this.authSubj.asObservable();
  timeoutLogout: any;

  //inserire il variabile log
  // isLoggedIn = true

  constructor(private http: HttpClient, private router: Router) {
    this.restore();
   }

   //inserire il login
  // isAuthenticated(){
  //   return this.isLoggedIn
  // }

  login(data: {email: string; password: string}) {
    return this.http.post<AuthData>(`${this.url}/login`, data).pipe(
      tap((data) => {
        console.log(data);
        this.authSubj.next(data);
        localStorage.setItem('user', JSON.stringify(data));
        this.autoLogout(data);
      })
    );
  }


  registration(data: {name: string; email: string; password: string}) {
    return this.http.post(`${this.url}/signup`, data);
  };

  restore() { //mantenere utente in localstorage
    const user = localStorage.getItem('user');
    if(!user) {
      return
    };
    const userdata: AuthData = JSON.parse(user);
    if(this.jwtHelper.isTokenExpired(userdata.accessToken)) {
      return;
    };

    this.authSubj.next(userdata);
    this.autoLogout(userdata);
  };

  logout() { //rimuovi user
    this.authSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if (this.timeoutLogout) {
      clearTimeout(this.timeoutLogout);
    };
  };

  autoLogout(data: AuthData) { // esci e rimuovi user a token expired
    const expiredDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date; //cast
    const exMs = expiredDate.getTime() - new Date().getTime();
    this.timeoutLogout = setTimeout( () => {
      this.logout();
    }, exMs);
  };

}
