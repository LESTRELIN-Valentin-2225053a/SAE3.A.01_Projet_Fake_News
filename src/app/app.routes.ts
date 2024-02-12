// app.routes.ts
import {RouterModule, Routes} from '@angular/router';
import { OfficeComponent } from './office/office.component';
import { ComputerComponent } from './computer/computer.component';
import { BoardRouterComponent } from './board-router/board-router.component';
import { Menu } from './menu/menu.component';
import { NgModule } from '@angular/core';
import {FormConnexionComponent} from "./form-connexion/form-connexion.component";

export const routes: Routes = [
  { path: '', component: Menu },
  {path: 'office',component: OfficeComponent },
  { path: 'board', component: BoardRouterComponent },
  { path: 'computer', component: ComputerComponent },
  { path: 'connexion', component: FormConnexionComponent }
];
