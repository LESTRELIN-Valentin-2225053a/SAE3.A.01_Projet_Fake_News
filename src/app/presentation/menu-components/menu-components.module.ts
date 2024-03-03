import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {FormLoginComponent} from "./form-login/form-login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { ValidateLoginComponent } from './validate-login/validate-login.component';
import { ValidateRegistrationComponent } from './validate-registration/validate-registration.component';



@NgModule({
  declarations: [
    MenuComponent,
    FormLoginComponent,
    ValidateLoginComponent,
    ValidateRegistrationComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class MenuComponentsModule { }
