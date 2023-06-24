import { Component, OnInit } from '@angular/core';
import { UtilityService } from '@app/_services/utility.service';
import { INPUT_TYPES } from '@app/constants/enums';
import { Section } from '@app/models/section.model';

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

	constructor(private utilityService: UtilityService) { }

	ngOnInit(): void {
		this.fetchAvailableSections();
	}

	onTabSelected(tab: Tab): void {
		this.selectedTab = tab;
	}

	fetchAvailableSections(): void {
		this.utilityService.getAllSections().subscribe(sections => {
			this.utilityService.getAllFields().subscribe(fields => {
				sections.forEach(section => {
					section.fieldsList = fields.filter(field => {
						if (field.type == INPUT_TYPES.INPUT_GROUP) {
							field.groupFieldsList = fields.filter(f => field.groupFields && field.groupFields.indexOf(f.id) >= 0);
						}
						return section.fields.indexOf(field.id) >= 0;
					});
				});
				this.availableSections = sections;
			})
		});
	}

	onSectionValueChange(contentJSON: any): void {
		console.log(contentJSON)
	}
}
