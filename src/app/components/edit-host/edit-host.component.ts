import { Component, OnInit } from '@angular/core';
import { Host } from 'src/app/models/host.interface';
import { HostService } from 'src/app/services/host.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-host',
  templateUrl: './edit-host.component.html',
  styleUrls: ['./edit-host.component.scss'],
})
export class EditHostComponent implements OnInit {
  updateHost: Host | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private hostSrv: HostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.hostSrv.getHosts().subscribe((host: Host[]) => {
    //   host.find((element) => {
    //     return this.updateHost = element;
    //   });
    // });

    let x = this.activeRoute.snapshot.params["id"];
    this.hostSrv.getHosts().subscribe((host: Host[]) => {
        this.updateHost = host.find((element) => {
            if(x == element.id) {
                return true
            }
            else {
                return false
            }
        })
    })

  }

  update(form: NgForm) {
    let host: Host = {
      id: this.updateHost!.id,
      title: this.updateHost!.title,
      city: this.updateHost!.city,
      location: this.updateHost!.location,
      category: this.updateHost!.category,
      img: this.updateHost!.img,
      info: this.updateHost!.info,
      description: this.updateHost!.description,
      author: this.updateHost!.author,
      userId: this.updateHost!.userId,
    };
    console.log(host);
    this.hostSrv.updateHost(host).subscribe();
    this.router.navigate(['/le-tue-proprieta']);
  }

}
