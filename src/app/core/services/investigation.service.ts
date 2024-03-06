import {Injectable} from "@angular/core";
import {InvestigationRepository} from "../repositories/investigation.repository";
import {Observable} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";

/**
 * The InvestigationService provides methods to retrieve and manipulate investigation data.
 * It interacts with an InvestigationRepository to perform data operations.
 */
@Injectable({ providedIn: 'root' })
export class InvestigationService {

  /**
   * Constructs the InvestigationService.
   * @param investigationRepository The InvestigationRepository used to interact with investigation data.
   */
  constructor(private investigationRepository: InvestigationRepository) {}

  /**
   * Retrieves an investigation by its ID.
   * @param id The ID of the investigation to retrieve.
   * @returns An Observable emitting the retrieved InvestigationModel.
   */
  getInvestigationById(id : number) : Observable<InvestigationModel> {
    return this.investigationRepository.getInvestigationById(id);
  }

  /**
   * Retrieves all investigations.
   * @returns An Observable emitting an array of InvestigationModel objects.
   */
  getAllInvestigations(): Observable<InvestigationModel[]> {
    return this.investigationRepository.getAllInvestigations();
  }

  /**
   * Retrieves an investigation by its ID for the current user.
   * @param id The ID of the investigation to retrieve.
   * @returns An Observable emitting the retrieved InvestigationModel for the current user.
   */
  getInvestigationByIdForUser(id : number): Observable<InvestigationModel>{
    return this.investigationRepository.getInvestigationByIdForUser(id);
  }

  /**
   * Retrieves all investigations for the current user.
   * @returns An Observable emitting an array of InvestigationModel objects for the current user.
   */
  getAllInvestigationsForUser(): Observable<InvestigationModel[]> {
    return this.investigationRepository.getAllInvestigationsForUser();
  }


  getInvestigationScore(duration : number) : number {
    return 1000*Math.exp(-0.02*duration);
  }

  /**
   * Marks an investigation as completed for the current user.
   * @param id The ID of the investigation to mark as completed.
   * @returns An Observable emitting true if the operation was successful, false otherwise.
   */
  completeInvestigationByIdForUser(id : number): Observable<boolean> {
    return this.investigationRepository.updateCompletionOfInvestigationByIdForUser(id);
  }
}
