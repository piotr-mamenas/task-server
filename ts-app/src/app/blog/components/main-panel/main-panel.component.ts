import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanel implements OnInit {

  posts = ['Hello','Second Hello','Third Hello'];

  constructor() { }

  ngOnInit() {
  }

}
