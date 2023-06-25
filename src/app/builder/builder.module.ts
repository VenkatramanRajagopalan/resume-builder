import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderRoutingModule } from './builder-routing.module';
import { CanvasComponent } from './canvas/canvas.component';
import { BuilderComponent } from './builder.component';
import { ContentComponent } from './tabs/content/content.component';
import { ThemeComponent } from './tabs/theme/theme.component';
import { ExportComponent } from './tabs/export/export.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleTemplateComponent } from './templates/sample-template/sample-template.component';

@NgModule({
  declarations: [
    BuilderComponent,
    CanvasComponent,
    ContentComponent,
    ThemeComponent,
    ExportComponent,
    SampleTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BuilderRoutingModule
  ]
})
export class BuilderModule { }
