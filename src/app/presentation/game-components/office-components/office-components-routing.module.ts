import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {OfficeComponent} from "./office/office.component";

const routes: Routes = [
  {
    path: '',
    component: OfficeComponent
  }
];

/**
 * Module responsible for routing related to the office feature of the application.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeComponentsRoutingModule { }
