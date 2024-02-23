import {Observable} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";

export interface InvestigationRepository {
  getInvestigationById(id : number): Observable<InvestigationModel>;
  getAllInvestigations(): Observable<InvestigationModel[]>;
  getAllInvestigationsWithSessionId(sessionId : string): Observable<InvestigationModel[]>;
  getInvestigationByIdWithSessionId(id : number,sessionId : string): Observable<InvestigationModel>;
}
