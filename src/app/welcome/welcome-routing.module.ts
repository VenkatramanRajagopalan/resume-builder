import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { ROUTE_CONSTANTS } from '@app/constants/constants';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: ROUTE_CONSTANTS.START,
        component: WelcomeFormComponent
      }, {
        path: ROUTE_CONSTANTS.TEMPLATE_LIST,
        component: TemplateListComponent
      }, {
        path: '',
        redirectTo: ROUTE_CONSTANTS.START,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
