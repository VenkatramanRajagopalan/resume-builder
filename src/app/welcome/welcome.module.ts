import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';
import { WelcomeComponent } from './welcome.component';
import { TemplateListComponent } from './template-list/template-list.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeFormComponent,
    TemplateListComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
