import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BoardForRouterComponent} from "./board-for-router/board-for-router.component";


const routes: Routes = [
  {
    path: '',
    component: BoardForRouterComponent
  }
];

/**
 * Routing module for board-related components.
 * Defines routes for the board components to be used within the application.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardComponentsRoutingModule { }
