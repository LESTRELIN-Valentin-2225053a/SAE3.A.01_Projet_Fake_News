import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {FormLoginComponent} from "./form-login/form-login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AdminPageComponent} from "./admin-page/admin-page.component";



@NgModule({
  declarations: [
    MenuComponent,
    FormLoginComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterLink,
    FormsModule
  ]
})
export class MenuComponentsModule { }
