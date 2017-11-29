import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../classes/post';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input('rendered-post') renderedPost: Post;

  constructor() { }

  ngOnInit() {
  }

}
