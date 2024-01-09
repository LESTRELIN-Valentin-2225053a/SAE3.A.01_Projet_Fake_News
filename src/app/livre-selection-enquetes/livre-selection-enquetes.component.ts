import {Component, OnInit} from '@angular/core';
import {Media} from "../media";
import {enquetes} from "../enquetes";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-livre-selection-enquetes',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './livre-selection-enquetes.component.html',
  styleUrl: './livre-selection-enquetes.component.css'
})
export class LivreSelectionEnquetesComponent implements OnInit{

  enquetesList: enquetes[] = [
    {
      id: 0,
      titre: "Ne fais pas d'enquetes",
      description: "aucune enquetes selectionner",
      reussite: false
    },
    {
      id: 1,
      titre: "Une semaine chez macron",
      description: "Refaite une semaine de macron grace au image du tableau",
      reussite: false
    },
    {
      id: 2,
      titre: "tweeter et trump",
      description: "les fakes news de trump sur tweeter",
      reussite: false
    },
    {
      id: 3,
      titre: "valentin est italien",
      description: "les pizza c'est bon",
      reussite: false
    }
  ];

  page: number = 1;
  pageMax: number = this.enquetesList.length;
  titre: string = "";
  description: string = "";
  DoingAEnquete: boolean = false;
  CurrentEnquete: number = 0;
  correction: boolean = true;
  messagecorrection: string = "";

  PlusPage(): void {
    if (this.page < this.pageMax) {
      this.page += 1;
      this.updateEnquete();
    }
  }
  LessPage(): void {
    if (this.page > 1) {
      this.page -= 1;
      this.updateEnquete();
    }
  }

  ngOnInit(): void {
    this.updateEnquete();
  }

  updateEnquete(): void {
    this.titre = this.enquetesList[this.page].titre;
    this.description = this.enquetesList[this.page].description;
  }

  SelectionEnquete(): void {
    this.CurrentEnquete = this.page;
    this.DoingAEnquete = true;
  }
  ValidationReponse(): void {
    if (this.correction){
      this.enquetesList[this.page].reussite = true;
      this.messagecorrection = "Bravo vous avez réussi l'enquete";
      this.DoingAEnquete = false;
      this.CurrentEnquete = 0;
    } else {
      this.messagecorrection = "nullos recommence";
    }
  }
  AbandonEnquete(): void {
    this.DoingAEnquete = false;
    this.CurrentEnquete = 0;
  }
}
