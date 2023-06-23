import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '@app/_services/utility.service';
import { ROUTE_CONSTANTS } from '@app/constants/constants';
import { TemplateList } from '@app/models/template.model';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {

	public templateList: TemplateList[] = [];
	
	constructor(private _router: Router, private utilityService: UtilityService) {}

	ngOnInit(): void {
		this.getTemplateList();
	}

	onClickContinue(): void {
		this._router.navigate([ROUTE_CONSTANTS.BUILDER]);
	}

	onClickBack(): void {
		this._router.navigate([ROUTE_CONSTANTS.START]);
	}

	getTemplateList(): void {
		this.utilityService.getTemplateList().subscribe(templateList => {
			this.templateList = templateList; // TODO: Filter list based on the selection in welcome form
		});
	}

	onTemplateClick(template: TemplateList): void {
		this.templateList.forEach(temp => temp.isSelected = template.id === temp.id ? !temp.isSelected : false);
	}
}
