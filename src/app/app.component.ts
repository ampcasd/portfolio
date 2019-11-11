import { Component, AfterViewInit, AfterViewChecked, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'portfolio';
  contentWidth: number;

  ngOnInit() {
    this.contentWidth = document.getElementsByClassName('name')[0].clientWidth + 3;
  }
}
