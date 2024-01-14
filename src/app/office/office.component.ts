import { Component } from '@angular/core';

@Component({
  selector: 'app-office',
  template: `
    <div class="office">
      <div class="desk" [class.zoomed]="isComputerZoomed">
        <button class="computer" (click)="zoomComputer()">
          <img src="/assets/computer.png"/>
        </button>
        <button class="book"><img src="/assets/book.png"/>
          <p><strong>Enquête<br>en cours</strong></p></button>
        <button class="board"><img src="/assets/board.png"/></button>
        <div class="bonsai" (click)="shakeBonsai()"><img src="/assets/bonsai.png"/></div>
      </div>
    </div>`,
  standalone: true,
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
