import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Template, TemplateDetails } from '@app/models/template.model';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnChanges, AfterViewInit {

    @ViewChild('templateHost', {static: false}) templateHost: ElementRef<HTMLElement> = <ElementRef>{};

    @Input() templateDetails: TemplateDetails = <TemplateDetails>{};
    @Input() selectedTemplate: Template = <Template>{};
    @Input() templateContent: any = {};

    private dynamicTemplate: Element = <Element>{};

    constructor() { }

    ngAfterViewInit(): void {
        /* if (this.templateHost) {
            this.templateHost.nativeElement.appendChild(this.dynamicTemplate);
        } */
    }

    ngOnChanges(changes: SimpleChanges): void {
        /* if (changes['selectedTemplate']) {
            if (this.selectedTemplate) {
                this.dynamicTemplate = document.createElement(this.selectedTemplate.componentSelector);
                this.dynamicTemplate.setAttribute('contentJSON', this.templateContent);
            }
        } */
    }

}
