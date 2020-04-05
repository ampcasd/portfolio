import { Component, Input } from '@angular/core';

import { Activity } from './activity.interface';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {

  @Input() header: string;
  @Input() activities: Activity[];

}
