import {Observable} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";

export interface InvestigationRepository {
  getInvestigationById(id : number): Observable<InvestigationModel>;
  getAllInvestigations(): Observable<InvestigationModel[]>;
}
