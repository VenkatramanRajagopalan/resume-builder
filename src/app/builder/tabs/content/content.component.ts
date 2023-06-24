import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Section } from '@app/models/section.model';
import { INPUT_TYPES, SECTION_ID } from '@app/constants/enums';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, AfterViewInit, OnChanges {
	@Input() availableSections: Section[] = [];
	@Output() onSectionValueChange: EventEmitter<Section> = new EventEmitter();
	
	public isEditSection: string = '';
	public editIndex: number = 0;
	public contentJSON: any = {};

  	constructor() {}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.buildContentJSON();
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.buildContentJSON();
	}

	public get INPUT_TYPES() {
		return INPUT_TYPES;
	}

	public onClickSaveButton(section: Section): void {
		this.onSectionValueChange.emit(this.contentJSON);
	}

	public onClickAddUpdateButton(section: Section): void {
		if (this.isEditSection) {
			this.contentJSON[section.key][this.editIndex] = this.contentJSON[`${section.key}Struct`];
		} else {
			this.contentJSON[section.key].push(this.contentJSON[`${section.key}Struct`]);
		}
		this.onSectionValueChange.emit(this.contentJSON);
	}

	private buildContentJSON(): void {
		this.availableSections.forEach(section => {
			this.contentJSON[section.key] = section.isMultiple ? [] : {};
			let objKey = section.key;
			if (section.isMultiple) {
				this.contentJSON[`${section.key}Struct`] = {};
				objKey += 'Struct';
			}
			section.fieldsList.forEach(field => {
				if (field.type === INPUT_TYPES.INPUT_GROUP) {
					this.contentJSON[objKey][field.id] = {};
					field.groupFieldsList?.forEach(groupField => {
						this.contentJSON[objKey][field.id][groupField.id] = '';
					});
				} else if (field.type === INPUT_TYPES.INPUT_GROUP_MOBILE) {
					this.contentJSON[objKey][field.id] = '';
					const mobileCode = `${field.id}Code`
					this.contentJSON[objKey][mobileCode] = '';
				} else {
					this.contentJSON[objKey][field.id] = '';
				}
			});
		});
	}

}
