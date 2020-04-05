import { Component, OnInit } from '@angular/core';

import { SocialMedia } from './social-media.interface';
import { MY_SOCIAL_MEDIA } from './social-media.const';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  readonly socialMedia: SocialMedia[] = MY_SOCIAL_MEDIA;

}
