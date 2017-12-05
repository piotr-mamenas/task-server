import { Component, OnInit } from '@angular/core';
import { CalendarMonths } from '../../../shared/constants';

@Component({
  selector: 'blog-right-panel',
  templateUrl: './blog-right-panel.component.html',
  styleUrls: ['./blog-right-panel.component.css']
})
export class BlogRightPanelComponent implements OnInit {
  months = CalendarMonths;

  constructor() {
  }

  ngOnInit() {
    console.log(CalendarMonths);
  }

}
