import { Component, OnInit } from '@angular/core';

import { AVATAR_WIDTH } from 'components/page-content/about-me/about-me.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  readonly title = 'portfolio';

  contentWidth: number;

  ngOnInit() {
    this.contentWidth = document.getElementsByClassName('name')[0].clientWidth - AVATAR_WIDTH;
  }
}
