import { Component, OnInit } from '@angular/core';
import { Propriety } from 'src/app/models/propriety.interface';
import { ProprietiesService } from 'src/app/services/proprieties.service';
import { NgForm } from '@angular/forms';
import { Query } from 'src/app/models/query.interface';

@Component({
  selector: 'app-all-proprieties',
  templateUrl: './all-proprieties.component.html',
  styleUrls: ['./all-proprieties.component.scss'],
})
export class AllProprietiesComponent implements OnInit {
  loading = false;
  properties: Propriety[] | undefined;

  constructor(private proprietiesSrv: ProprietiesService) {}

  ngOnInit(): void {}

  getProperty(formData: NgForm) {
    this.loading = true;
    this.proprietiesSrv.getProperties(formData.value).subscribe((data) => {
      this.properties = data.results;
      this.loading = false;
    });
  }
}
