import {Observable} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";

export abstract class InvestigationRepository {
  abstract getInvestigationById(id : number): Observable<InvestigationModel>;
  abstract getAllInvestigations(): Observable<InvestigationModel[]>;
  abstract getAllInvestigationsWithUserId(userId : number): Observable<InvestigationModel[]>;
  abstract getInvestigationByIdWithUserId(id: number, userId: number): Observable<InvestigationModel>;
}
