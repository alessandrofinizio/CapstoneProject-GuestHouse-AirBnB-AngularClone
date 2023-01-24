import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.interface';
import { BlogsService } from 'src/app/services/blogs.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-body-section',
  templateUrl: './body-section.component.html',
  styleUrls: ['./body-section.component.scss']
})
export class BodySectionComponent implements OnInit {

  sub!: Subscription
  blogs: Blog[] | undefined

  constructor(private http: HttpClient, private blogSrv: BlogsService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(){
    this.sub = this.blogSrv.getBlogs().subscribe((ris) => {
      this.blogs = ris;
  })

  }
}
