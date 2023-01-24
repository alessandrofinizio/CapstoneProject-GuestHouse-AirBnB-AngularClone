import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { Blog } from 'src/app/models/blog.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  loading = true;
  singleArticle : Blog | undefined
  blogs: Blog[] | undefined

  constructor(private ar: ActivatedRoute, private blogSrv : BlogsService ) { }

  ngOnInit(): void {

    let x = this.ar.snapshot.params['id'];
    this.blogSrv.getBlogs().subscribe((blog: Blog[]) =>{
      this.loading = false;
      this.singleArticle = blog.find((element) => {
        if(x == element.id) {
            return true
        }
        else {
            return false
        }
      })
    })
    this.getBlog();
  }


  getBlog(){
    this.blogSrv.getBlogs().subscribe((ris) => {
      this.blogs = ris;
  })
  }
}
