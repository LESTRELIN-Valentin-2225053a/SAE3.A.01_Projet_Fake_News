import { Component } from '@angular/core';

@Component({
  selector: 'app-office',
  template: `
    <div class="office">
      <div class="desk" [class.zoomed]="isComputerZoomed">
        <button class="computer" (click)="zoomComputer()">
          <img src="/assets/computer.png" alt="Ordinateur"/>
        </button>
        <button class="book"><img src="/assets/book.png" alt="Livre d'enquêtes"/>
          <p><strong>Enquête<br>en cours</strong></p></button>
        <button class="board"><img src="/assets/board.png" alt="Tableau"/></button>
        <div class="bonsai" (click)="shakeBonsai()"><img src="/assets/bonsai.png" alt="Arbre qui secoue lorsque l'on clique avec la souris et qui est pas mal"/></div>
      </div>
    </div>`,
  standalone: true,
  imports: [
  ],
  styleUrls: ['./office.component.css']
})
export class OfficeComponent {

  isComputerZoomed = false;
  zoomComputer() {
    this.isComputerZoomed = true;
  }
  shakeBonsai() {
    const bonsai = document.querySelector('.bonsai');
    bonsai?.classList.add('clicked');
    setTimeout(() => {
      bonsai?.classList.remove('clicked');
    }, 500);
  }
}
