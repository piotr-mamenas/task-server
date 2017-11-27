import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-main-panel',
  templateUrl: './blog-main-panel.component.html',
  styleUrls: ['./blog-main-panel.component.css']
})
export class BlogMainPanelComponent implements OnInit {

  posts = ['Hello','Second Hello','Third Hello'];

  constructor() { }

  ngOnInit() {
  }

}
