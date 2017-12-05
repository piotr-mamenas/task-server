import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from '../../classes/post';

@Component({
  selector: 'blog-main-panel',
  templateUrl: './blog-main-panel.component.html',
  styleUrls: ['./blog-main-panel.component.css']
})
export class BlogMainPanelComponent implements OnInit {
  posts: Post[];

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/posts')
        .subscribe(response => {
          this.posts = response.json();
        });
  }

  ngOnInit() {
  }

}
