import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = []

  constructor(
    private authService: AuthService,
    private route:ActivatedRoute,
    private router: Router,
    ) {}


  ngOnInit(): void {
    //chiamata a local storage
    let userLogger: any =localStorage.getItem('user');
    this.user = JSON.parse(userLogger);
  }

  logout(){
    this.authService.logout();
  }

  uploadHost(){
    this.router.navigate(['aggiungi-proprieta'], {relativeTo:this.route});
  }
  yourHost(){
      this.router.navigate(['le-tue-proprieta'], {relativeTo:this.route});
  }

}
