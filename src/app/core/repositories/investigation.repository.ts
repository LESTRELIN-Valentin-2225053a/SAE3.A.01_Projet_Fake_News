import {Observable} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";

export abstract class InvestigationRepository {
  abstract getInvestigationById(id : number): Observable<InvestigationModel>;
  abstract getAllInvestigations(): Observable<InvestigationModel[]>;
  abstract getAllInvestigationsWithSessionId(sessionId : string): Observable<InvestigationModel[]>;
  abstract getInvestigationByIdWithSessionId(id : number, sessionId : string): Observable<InvestigationModel>;
  abstract newInvestigation(title : string, description : string,
                            explication : string, board_type : string) : Observable<InvestigationModel>;
  abstract updateInvestigation(id : number, title : string, description : string,
                               explication : string, board_type : string) : Observable<InvestigationModel>;
  abstract deleteInvestigation(id: number) : Observable<boolean>;
}
