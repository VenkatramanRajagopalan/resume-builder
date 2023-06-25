import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample-template',
  templateUrl: './sample-template.component.html',
  styleUrls: ['./sample-template.component.scss']
})
export class SampleTemplateComponent {

    @Input() contentJSON: any = null;

    constructor() { }
}
