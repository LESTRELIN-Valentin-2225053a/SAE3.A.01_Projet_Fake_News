import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-form-connexion',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    NgIf
  ],
  templateUrl: './form-connexion.component.html',
  styleUrl: './form-connexion.component.css'
})
export class FormConnexionComponent {
  showInsciption: boolean = false;


  showInscriptionToggled(): void {
    this.showInsciption = !this.showInsciption;
  }
}
