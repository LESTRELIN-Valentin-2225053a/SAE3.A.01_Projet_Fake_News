import {Observable} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";

export abstract class InvestigationRepository {
  abstract getInvestigationById(id : number): Observable<InvestigationModel>;
  abstract getAllInvestigations(): Observable<InvestigationModel[]>;
  abstract getAllInvestigationsForUser(): Observable<InvestigationModel[]>;
  abstract getInvestigationByIdForUser(id: number): Observable<InvestigationModel>;
  abstract updateCompletionOfInvestigationByIdForUser(id: number): Observable<boolean>;
}
