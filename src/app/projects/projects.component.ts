import { Component } from '@angular/core';
import { MY_WORKPLACES } from './commercial-experience.const';

export interface CompanyData {
  name: string;
  url: string;
  role: string;
  description: string[];
  years: {
    since: number;
    till: number;
  };
  noLogo?: boolean;
}

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  companies: CompanyData[] = MY_WORKPLACES;

}
