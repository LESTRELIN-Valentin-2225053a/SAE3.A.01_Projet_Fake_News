import {Component, OnInit} from '@angular/core';
import {Media} from "../media";
import {enquetes} from "../enquetes";

@Component({
  selector: 'app-livre-selection-enquetes',
  standalone: true,
  imports: [],
  templateUrl: './livre-selection-enquetes.component.html',
  styleUrl: './livre-selection-enquetes.component.css'
})
export class LivreSelectionEnquetesComponent implements OnInit{

  enquetesList: enquetes[] = [
    {
      id: 1,
      titre: "coucou1",
      description: "salut c'est coucou1"
    },
    {
      id: 2,
      titre: "coucou2",
      description: "salut c'est coucou2"
    },
    {
      id: 3,
      titre: "coucou3",
      description: "salut c'est coucou3"
    }
  ];

  page: number = 1;
  pageMax: number = this.enquetesList.length;
  titre: string = "";
  description: string = "";
  EstElleFaite: boolean = false;

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
    this.titre = this.enquetesList[this.page - 1].titre;
    this.description = this.enquetesList[this.page - 1].description;
  }

}
