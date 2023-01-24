import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Host } from 'src/app/models/host.interface';
import { HostService } from 'src/app/services/host.service';

@Component({
  selector: 'app-view-host',
  templateUrl: './view-host.component.html',
  styleUrls: ['./view-host.component.scss']
})
export class ViewHostComponent implements OnInit {

  viewHost : Host | undefined

  constructor(private activeRoute : ActivatedRoute, private hostSrv : HostService) { }

  ngOnInit(): void {
    let x = this.activeRoute.snapshot.params['id'];
    this.hostSrv.getHosts().subscribe((host: Host[]) =>{
      this.viewHost = host.find((element) => {
        if(x == element.id){
          return true
        }
        else{
          return false
        }
      })
    })
  }
}
