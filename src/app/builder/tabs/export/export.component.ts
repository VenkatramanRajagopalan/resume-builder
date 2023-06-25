import { Component } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {

    public export: {fileName: string} = {fileName: ''};

    constructor() { }

    onClickExportButton(): void { }
}
