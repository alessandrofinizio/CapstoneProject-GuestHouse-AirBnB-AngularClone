import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false

  constructor(private srvAuth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async login(form: NgForm) {
    this.isLoading = true
    try {
      await this.srvAuth.login(form.value).toPromise();
      this.router.navigate(['/profilo']);
    } catch (err) {
      this.isLoading = false
      alert("Password errata");
    }
  }

}


