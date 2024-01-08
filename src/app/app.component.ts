import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BoardComponent} from "./board/board.component";
import {Afichemenu} from "./menu/menu.component";
import {LivreSelectionEnquetesComponent} from "./livre-selection-enquetes/livre-selection-enquetes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BoardComponent, Afichemenu, LivreSelectionEnquetesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SAE3.A.01_Projet_Fake_News';
}
