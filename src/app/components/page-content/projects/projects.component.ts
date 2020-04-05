import { Component } from '@angular/core';

import { MY_WORKPLACES } from './commercial-experience.const';
import { CommercialExperience } from './commercial-experience.interface';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  readonly companies: CommercialExperience[] = MY_WORKPLACES;

}
