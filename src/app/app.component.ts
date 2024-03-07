import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CoreModule} from "./core/core.module";
import {DataModule} from "./data/data.module";
import {PresentationModule} from "./presentation/presentation.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            CoreModule,
            DataModule,
            PresentationModule,
            RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'SAE3.A.01_Projet_Fake_News';

  constructor() {}
}
