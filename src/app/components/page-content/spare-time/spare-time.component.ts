import { Component } from '@angular/core';

import { Activity } from 'shared/components/activity/activity.interface';
import { SPARE_TIME_ACTIVITIES } from './spare-time-activities.const';

@Component({
  selector: 'spare-time',
  templateUrl: './spare-time.component.html',
})
export class SpareTimeComponent {

  readonly spareTimeActivities: Activity[] = SPARE_TIME_ACTIVITIES;

}
