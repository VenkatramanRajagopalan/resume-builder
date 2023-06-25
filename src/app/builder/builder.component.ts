import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '@app/_services/utility.service';
import { ROUTE_CONSTANTS } from '@app/constants/constants';
import { INPUT_TYPES } from '@app/constants/enums';
import { FormField } from '@app/models/field.model';
import { Section } from '@app/models/section.model';
import { Template, TemplateDetails } from '@app/models/template.model';

export interface Tab {
	id: number,
	label: string,
	icon: string
}

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

	public tabs: Tab[] = [
		{id: 0, label: 'Content', icon: 'bi-file-earmark-text'},
		{id: 1, label: 'Theme', icon: 'bi-palette'},
		{id: 2, label: 'Export', icon: 'bi-download'}
	]
	public selectedTab: Tab = this.tabs[0];

	public availableSections: Section[] = [];
	public selectedTemplate: Template = <Template>{};
	public templateDetails: TemplateDetails = <TemplateDetails>{};
	public templateContent: any = {};

	constructor(private utilityService: UtilityService, private _router: Router) { }

	ngOnInit(): void {
		this.fetchSelectedTemplate();
	}

	onTabSelected(tab: Tab): void {
		this.selectedTab = tab;
	}

	private fetchSelectedTemplate(): void {
		this.utilityService.getSelectedTemplate().subscribe(template => {
			if (Object.keys(template).length > 0) {
				this.selectedTemplate = template;
				this.fetchTemplateDetails();
			} else {
				this._router.navigate([ROUTE_CONSTANTS.HOME]);
			}
		});
	}

	private fetchTemplateDetails(): void {
		this.utilityService.getTemplateDetails(this.selectedTemplate.templateFile).subscribe(template => {
			if (template) {
				this.fetchAvailableSections(template);
			} else {
				alert('Unable to fetch template details. Not found');
				this._router.navigate([ROUTE_CONSTANTS.HOME]);
			}
		})
	}

	fetchAvailableSections(template: TemplateDetails): void {
		this.utilityService.getAllSections().subscribe(sections => {
			this.utilityService.getAllFields().subscribe(fields => {
				this.mapAvailableSectionsAndFields(template, sections, fields);
			});
		});
	}

	mapAvailableSectionsAndFields(template: TemplateDetails, sections: Section[], fields: FormField[]) {
		const availableSections = sections.filter(section => {
			if (template.availableSections.indexOf(section.id) >= 0) {
				section.fieldsList = fields.filter(field => {
					if (field.type == INPUT_TYPES.INPUT_GROUP) {
						field.groupFieldsList = fields.filter(f => field.groupFields && field.groupFields.indexOf(f.id) >= 0);
					}
					return section.fields.indexOf(field.id) >= 0;
				});
				return true;
			} else {
				return false;
			}
		});
		this.availableSections = availableSections;
	}

	onSectionValueChange(contentJSON: any): void {
		this.templateContent = contentJSON;
		console.log(contentJSON);
	}
}