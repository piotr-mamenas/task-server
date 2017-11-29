import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from '../../classes/post';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input('rendered-post') renderedPost: Post;

  comments : Post[];
  displayCommentBox : boolean = false;
  httpConnection : Http;

  constructor(http: Http) {
    this.httpConnection = http;
  }

  ngOnInit() {
  }

  onClickComment(post : Post, http : Http){
    this.httpConnection.get('http://jsonplaceholder.typicode.com/posts')
        .subscribe(response => {
          this.comments = response.json();
        });

    this.displayCommentBox = !this.displayCommentBox;
    console.log(post.id);
  }
}
