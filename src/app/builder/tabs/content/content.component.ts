import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Section } from '@app/models/section.model';
import { CHIP_TYPE, INPUT_FORMAT_TYPES, INPUT_TYPES, SECTION_ID } from '@app/constants/enums';
import { FormField } from '@app/models/field.model';

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
	
	public get INPUT_FORMAT_TYPES() {
		return INPUT_FORMAT_TYPES;
	}
	
	public get CHIP_TYPE() {
		return CHIP_TYPE;
	}

	public onClickSaveButton(section: Section): void {
		this.onSectionValueChange.emit(this.contentJSON);
	}

	public onClickAddUpdateButton(section: Section): void {
		if (this.isEditSection && this.isEditSection == section.id) { // EDIT flow
			this.contentJSON[section.key][this.editIndex] = JSON.parse(JSON.stringify(this.contentJSON[`${section.key}Struct`]));
			this.editIndex = 0;
			this.isEditSection = '';
		} else {  // Add flow
			this.contentJSON[section.key].push(JSON.parse(JSON.stringify(this.contentJSON[`${section.key}Struct`])));
		}
		this.contentJSON[`${section.key}Struct`] = this.emptyStructValue(this.contentJSON[`${section.key}Struct`]);
		/* Object.keys(this.contentJSON[`${section.key}Struct`]).forEach(key => {
			if (Object.keys(this.contentJSON[`${section.key}Struct`][key]).length > 0) {

			}
			this.contentJSON[`${section.key}Struct`][key] = '';
		}); */
		this.onSectionValueChange.emit(this.contentJSON);
	}

	public emptyStructValue(structValue: any): any {
		Object.keys(structValue).forEach(key => {
			if (typeof structValue[key] == 'object') {
				structValue[key] = this.emptyStructValue(structValue[key]);
			} else {
				structValue[key] = '';
			}
		});
		return structValue;
	}

	public onChipClick(section: Section, item: any, index: number): void {
		this.isEditSection = section.id;
		console.log(section, item, this.isEditSection);
		this.editIndex = index;
		this.contentJSON[`${section.key}Struct`] = {...item};
	}

	public onRemoveItemClick(section: Section, item: any, index: number): void {
		this.contentJSON[section.key].splice(index, 1);
		if (this.isEditSection) {
			Object.keys(this.contentJSON[`${section.key}Struct`]).forEach(key => this.contentJSON[`${section.key}Struct`][key] = '');
			this.isEditSection = '';
			this.editIndex = 0;
		}
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
