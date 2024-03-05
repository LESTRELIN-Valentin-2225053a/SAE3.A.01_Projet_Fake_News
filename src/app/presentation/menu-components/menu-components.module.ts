import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {FormLoginComponent} from "./form-login/form-login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {BoardComponentsModule} from "../game-components/board-components/board-components.module";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";



@NgModule({
  declarations: [
    MenuComponent,
    FormLoginComponent,
    AdminPageComponent,
    BoardAdminComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterLink,
    FormsModule,
    BoardComponentsModule,
    CdkDrag,
  ]
})
export class MenuComponentsModule { }
