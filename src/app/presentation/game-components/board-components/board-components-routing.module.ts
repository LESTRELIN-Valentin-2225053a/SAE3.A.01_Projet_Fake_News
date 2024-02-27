import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BoardForRouterComponent} from "./board-for-router/board-for-router.component";

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
