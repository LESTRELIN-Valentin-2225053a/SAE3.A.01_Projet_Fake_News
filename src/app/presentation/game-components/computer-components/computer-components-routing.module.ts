import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ComputerComponent} from "./computer/computer.component";

/**
 * Routing module for the computer-related components.
 * Defines routes for navigating to different computer-related views.
 */
const routes: Routes = [
  {
    path: '',
    component: ComputerComponent
  }
];

/**
 * Module that provides routing for the computer-related components.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputerComponentsRoutingModule {}
