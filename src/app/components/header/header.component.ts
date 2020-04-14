import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private analytics: AngularFireAnalytics) { }

  trackCv(): void {
    this.analytics.logEvent('cv_download');
  }
}
