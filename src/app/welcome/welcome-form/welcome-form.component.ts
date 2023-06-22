import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '@app/_services/utility.service';
import { ROUTE_CONSTANTS } from '@app/constants/constants';
import { SectionList } from '@app/models/section.model';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.scss']
})
export class WelcomeFormComponent {

	public sectionsList: SectionList[] = [];

	constructor(private _router: Router, private utilityService: UtilityService) { }

	ngOnInit(): void {
		this.fetchSectionsList();
	}

	fetchSectionsList(): void {
		this.utilityService.getSectionsList().subscribe(sections => {
			this.sectionsList = sections;
			this.sectionsList.map(section => section.isSelected = section.isMandatory);
		});
	}

	toggleSelection(section: any): void {
		section.isSelected = !section.isSelected;
	}

	onClickContinue(): void {
		this._router.navigate([`${ROUTE_CONSTANTS.HOME}/${ROUTE_CONSTANTS.TEMPLATE_LIST}`]);
	}
}
