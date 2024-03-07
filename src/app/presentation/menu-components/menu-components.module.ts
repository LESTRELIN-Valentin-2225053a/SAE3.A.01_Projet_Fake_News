import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {FormLoginComponent} from "./form-login/form-login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { ValidateLoginComponent } from './validate-login/validate-login.component';
import { ValidateRegistrationComponent } from './validate-registration/validate-registration.component';
import {ContextComponent} from "./context/context.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {BoardComponentsModule} from "../game-components/board-components/board-components.module";
import {GameComponentsModule} from "../game-components/game-components.module";


/**
 * Module for Menu Components.
 * This module declares and imports components related to the menu.
 */
@NgModule({
  declarations: [
    MenuComponent,
    ContextComponent,
    FormLoginComponent,
    ValidateLoginComponent,
    ValidateRegistrationComponent,
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
    GameComponentsModule
  ]
})
export class MenuComponentsModule { }
