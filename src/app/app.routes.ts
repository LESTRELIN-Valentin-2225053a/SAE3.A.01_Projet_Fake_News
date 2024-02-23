// app.routes.ts
import {Routes} from '@angular/router';
import { OfficeComponent } from './presentation/office/office.component';
import { ComputerComponent } from './presentation/computer/computer.component';
import { BoardRouterComponent } from './presentation/board-router/board-router.component';
import { Menu } from './presentation/menu/menu.component';
import {FormLoginComponent} from "./presentation/form-login/form-login.component";
import {GameComponent} from "./presentation/game/game.component";

export const routes: Routes = [
  { path: '', component: Menu },
  {path: 'office',component: GameComponent, children: [
      { path: '', component: OfficeComponent},
      { path: 'board',  component: BoardRouterComponent },
      { path: 'computer', component: ComputerComponent },
  ]},
  { path: 'login', component: FormLoginComponent }
];
