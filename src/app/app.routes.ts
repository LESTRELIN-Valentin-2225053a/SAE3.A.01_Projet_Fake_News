import { Routes } from '@angular/router';
import {BoardWithDraggableMediasComponent} from "./board-with-draggable-medias/board-with-draggable-medias.component";
import {OfficeComponent} from "./office/office.component";
import {ComputerComponent} from "./computer/computer.component";

export const routes: Routes = [
  {path: '',component: OfficeComponent},
  {path: 'board',component: BoardWithDraggableMediasComponent},
  {path: 'computer',component: ComputerComponent}
];
