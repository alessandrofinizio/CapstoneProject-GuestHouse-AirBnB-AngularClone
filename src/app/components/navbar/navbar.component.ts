import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any = []


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    let userOnline: any =localStorage.getItem('user');
    this.user = JSON.parse(userOnline);
  }

}
