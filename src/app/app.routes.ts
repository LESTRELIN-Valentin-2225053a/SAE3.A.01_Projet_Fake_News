import { Routes } from '@angular/router';
import {OfficeComponent} from "./office/office.component";
import {ComputerComponent} from "./computer/computer.component";
import {BoardRouterComponent} from "./board-router/board-router.component";

export const routes: Routes = [
  {path: '',component: OfficeComponent},
  {path: 'board',component: BoardRouterComponent},
  {path: 'computer',component: ComputerComponent}
];
