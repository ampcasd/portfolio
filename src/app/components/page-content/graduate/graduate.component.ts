import { Component } from '@angular/core';

import { GRADUATED_UNIVERSITIES } from './graduated-universities.const';
import { Activity } from 'shared/components/activity/activity.interface';

@Component({
  selector: 'graduate',
  templateUrl: './graduate.component.html',
})
export class GraduateComponent {

  readonly universities: Activity[] = GRADUATED_UNIVERSITIES;

}
