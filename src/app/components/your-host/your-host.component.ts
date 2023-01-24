import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Host } from 'src/app/models/host.interface';
import { HostService } from 'src/app/services/host.service';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-your-host',
  templateUrl: './your-host.component.html',
  styleUrls: ['./your-host.component.scss'],
})
export class YourHostComponent implements OnInit {
  sub!: Subscription;
  hosts: Host[] = [];
  loading = true;
  userdata: any = [];

  constructor(
    private http: HttpClient,
    private hostSrv: HostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHost();
    this.getUser();
  }

  getUser() {
    let userLogged: any = localStorage.getItem('user');
    this.userdata = JSON.parse(userLogged);
  }

  getHost() {
    this.sub = this.hostSrv.getHosts().subscribe((ris) => {
      ris.forEach((e) => {
        if (e.userId == this.userdata.user.id) {
          this.hosts.push(e);
          return;
        }
        console.log(this.hosts);
        return this.hosts;
      });
      this.loading = false;
    });
  }

  addHost(host: Host) {
    host.userId = this.userdata.id;
  }

  deleteHost(id: number) {
    this.http.delete('http://localhost:4201/host/' + id).subscribe();
    location.reload();
  }


  editHost(id: number) {
    this.router.navigate(['profilo', 'modifica-proprieta', id]);
  }
  viewHost(id: number) {
    this.router.navigate(['profilo', 'visualizza-proprieta', id]);
  }
}
