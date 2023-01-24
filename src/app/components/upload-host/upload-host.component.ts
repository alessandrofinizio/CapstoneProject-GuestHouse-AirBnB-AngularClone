import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/services/host.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-upload-host',
  templateUrl: './upload-host.component.html',
  styleUrls: ['./upload-host.component.scss'],
})
export class UploadHostComponent implements OnInit {

  userdata: any = [];

  constructor(private http: HttpClient, private hostData: HostService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let userLogged: any = localStorage.getItem('user');
    this.userdata = JSON.parse(userLogged);
  }

  uploadHost(form: NgForm) {
    try {
      form.controls['userId'].setValue(this.userdata.user.id)
      console.log(form.value);
      this.hostData.addHost(form.value).subscribe();
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }
}
