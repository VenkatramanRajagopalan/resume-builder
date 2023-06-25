import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { SUPPORTED_FONTS } from '@app/constants/constants';
import { TemplateDetails, Theme } from '@app/models/template.model';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnChanges {

    @Input() templateDetails: TemplateDetails = <TemplateDetails>{};
    @Output() themeChange: EventEmitter<TemplateDetails> = new EventEmitter<TemplateDetails>();

    public supportedFonts: string[] = SUPPORTED_FONTS;

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    onThemeSelect(selectedTheme: Theme): void {
        this.templateDetails.themes?.forEach(theme => theme.isActive = selectedTheme.id === theme.id);
    }

    onClickSaveButton(): void {
        this.themeChange.emit(this.templateDetails);
    }

}
