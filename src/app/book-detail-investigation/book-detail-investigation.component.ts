import {Component, inject, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {SessionService} from "../services/session.service";

@Component({
  selector: 'app-book-detail-investigation',
  standalone: true,
  imports: [],
  templateUrl: './book-detail-investigation.component.html',
  styleUrl: './book-detail-investigation.component.css'
})
export class BookDetailInvestigationComponent {
  sessionService: SessionService = inject(SessionService);

}
