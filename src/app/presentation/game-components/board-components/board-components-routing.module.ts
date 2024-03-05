import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BoardForRouterComponent} from "./board-for-router/board-for-router.component";

/**
 * Routing module for board-related components.
 * Defines routes for the board components to be used within the application.
 */
const routes: Routes = [
  {
    path: '',
    component: BoardForRouterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardComponentsRoutingModule { }
