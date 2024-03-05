import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameComponentsModule} from "./game-components/game-components.module";
import {MenuComponentsModule} from "./menu-components/menu-components.module";

/**
 * Module responsible for organizing and providing presentation-related components and modules.
 */
@NgModule({
  imports: [
    CommonModule,
    GameComponentsModule,
    MenuComponentsModule
  ],
  declarations: []
})
export class PresentationModule { }
