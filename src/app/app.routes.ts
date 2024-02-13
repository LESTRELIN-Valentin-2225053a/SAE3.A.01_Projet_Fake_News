// app.routes.ts
import {Routes} from '@angular/router';
import { OfficeComponent } from './office/office.component';
import { ComputerComponent } from './computer/computer.component';
import { BoardRouterComponent } from './board-router/board-router.component';
import { Menu } from './menu/menu.component';
import {FormLoginComponent} from "./form-login/form-login.component";
import {GameComponent} from "./game/game.component";

export const routes: Routes = [
  { path: '', component: Menu },
  {path: 'office',component: GameComponent, children: [
      { path: '', component: OfficeComponent},
      { path: 'board',  component: BoardRouterComponent },
      { path: 'computer', component: ComputerComponent },
  ]},
  { path: 'login', component: FormLoginComponent }
];
