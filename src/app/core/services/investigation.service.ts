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

  getInvestigationByIdWithUserId(id : number,userId : number): Observable<InvestigationModel>{
    return this.investigationRepository.getInvestigationByIdWithUserId(id, userId);
  }

  getAllInvestigationsWithUserId(userId : number): Observable<InvestigationModel[]> {
    return this.investigationRepository.getAllInvestigationsWithUserId(userId);
  }
}
