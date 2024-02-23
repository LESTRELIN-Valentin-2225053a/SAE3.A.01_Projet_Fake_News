// ============================================
//                    Import
// ============================================
import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import { BookSelectionInvestigationComponent } from "../book-selection-investigation/book-selection-investigation.component";
import {Dialog} from "@angular/cdk/dialog";
import {SessionService} from "../services/session.service";
import {Investigation} from "../interfaces/investigation";
import { ScoreChronoComponent } from '../score-chrono/score-chrono.component';

// ============================================
//                Component
// ============================================
@Component({
  selector: 'app-office',
  templateUrl : './office.component.html',
  standalone: true,
  imports: [
    RouterLink,
    BookSelectionInvestigationComponent,
    RouterOutlet
  ],
  styleUrls: ['./office.component.css']
})
export class OfficeComponent {

// ============================================
//                Variables
// ============================================

  /**
   *
   */
  isComputerZoomed = false;
  sessionService : SessionService = inject(SessionService);
  scoreChronoComponent: ScoreChronoComponent = new ScoreChronoComponent;

// ============================================
//                Methods
// ============================================

  /**
   *
   * @param dialog
   * @param router
   */
  constructor(public dialog: Dialog, private router: Router) {
  }

  ngOnInit() {
    this.scoreChronoComponent.startTimer();
  }

  /**
   *
   */
  zoomComputerAndChangePage() {
    this.isComputerZoomed = true;
    setTimeout(() => {
      this.router.navigate(['office/computer']);
    }, 1000);
  }

  noInvestigationChosen() : boolean {
    return this.sessionService.actualInvestigation == {} as Investigation;
  }

  /**
   *
   */
  shakeBonsai() {
    const bonsai = document.querySelector('.bonsai');
    bonsai?.classList.add('clicked');
    setTimeout(() => {
      bonsai?.classList.remove('clicked');
    }, 500);
  }

  /**
   *
   */
  openDialog(): void {
    this.dialog.open(BookSelectionInvestigationComponent, {
      autoFocus: 'false',
    });
  }

  openScoreWindow(): void {
    this.dialog.open(ScoreChronoComponent, {
      autoFocus: 'false',
    });
  }

  getScore(): number {
    return this.scoreChronoComponent.getScore();
  }

  getElapsedTime(): string {
    return this.scoreChronoComponent.getElapsedTime();
  }
}
