import { Component } from '@angular/core';

@Component({
  selector: 'my-stack',
  templateUrl: './my-stack.component.html',
  styleUrls: ['./my-stack.component.scss']
})
export class MyStackComponent {

  readonly skills: string[] = [
    'angular', 'typescript', 'html5',
    'javascript', 'css3', 'sass'
  ];

}
