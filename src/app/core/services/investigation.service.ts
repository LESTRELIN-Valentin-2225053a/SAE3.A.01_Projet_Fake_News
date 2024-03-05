import {Injectable} from "@angular/core";
import {InvestigationRepository} from "../repositories/investigation.repository";
import {Observable} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";

@Injectable({ providedIn: 'root' })
export class InvestigationService {

  constructor(private investigationRepository: InvestigationRepository) {}

  getInvestigationById(id : number) : Observable<InvestigationModel> {
    return this.investigationRepository.getInvestigationById(id);
  }

  getAllInvestigations(): Observable<InvestigationModel[]> {
    return this.investigationRepository.getAllInvestigations();
  }

  getInvestigationByIdForUser(id : number): Observable<InvestigationModel>{
    return this.investigationRepository.getInvestigationByIdForUser(id);
  }

  getAllInvestigationsForUser(): Observable<InvestigationModel[]> {
    return this.investigationRepository.getAllInvestigationsForUser();
  }

  completeInvestigationByIdForUser(id : number): Observable<boolean> {
    return this.investigationRepository.updateCompletionOfInvestigationByIdForUser(id);
  }
}
