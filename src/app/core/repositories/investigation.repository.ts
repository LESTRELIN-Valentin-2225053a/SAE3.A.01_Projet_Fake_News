import {Observable} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";

/**
 * Repository interface for handling investigations.
 */
export abstract class InvestigationRepository {
  /**
   * Retrieves an investigation by its ID.
   * @param id The ID of the investigation to retrieve.
   * @returns An observable that emits the investigation model corresponding to the provided ID.
   */
  abstract getInvestigationById(id: number): Observable<InvestigationModel>;

  /**
   * Retrieves all investigations.
   * @returns An observable that emits an array of all investigation models.
   */
  abstract getAllInvestigations(): Observable<InvestigationModel[]>;

  /**
   * Retrieves all investigations for a user.
   * @returns An observable that emits an array of investigation models associated with the user.
   */
  abstract getAllInvestigationsForUser(): Observable<InvestigationModel[]>;

  /**
   * Retrieves an investigation by its ID for an authenticated user.
   * @param id The ID of the investigation to retrieve.
   * @returns An observable that emits the investigation model corresponding to the provided ID for an authenticated user.
   */
  abstract getInvestigationByIdForUser(id: number): Observable<InvestigationModel>;

  /**
   * Updates the completion status of an investigation by its ID for an authenticated user.
   * @param id The ID of the investigation to update.
   * @returns An observable that emits a boolean value indicating whether the update was successful.
   */
  abstract updateCompletionOfInvestigationByIdForUser(id: number): Observable<boolean>;
}
