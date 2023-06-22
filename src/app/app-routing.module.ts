import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from './constants/constants';

const routes: Routes = [
  {path: ROUTE_CONSTANTS.HOME, loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: ROUTE_CONSTANTS.BUILDER, loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule) },
  {path: '', redirectTo: ROUTE_CONSTANTS.HOME, pathMatch: 'full'},
  {path: '**', redirectTo: ROUTE_CONSTANTS.HOME, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
