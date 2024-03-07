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
   * Retrieves all investigations for an authenticated user.
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
  abstract newInvestigation(title : string, description : string,
                            explication : string, board_type : string) : Observable<InvestigationModel>;
  abstract updateInvestigation(id : number, title : string, description : string,
                               explication : string, board_type : string) : Observable<InvestigationModel>;
  abstract deleteInvestigation(id: number) : Observable<boolean>;
  abstract linkWebsiteToInvestigation(investigation_id: number, website_id: number): Observable<boolean>;
  abstract removeWebsiteFromInvestigation(investigation_id: number, website_id: number): Observable<boolean>;
  abstract linkMediaToInvestigation(investigation_id: number, media_id: number , formdata : FormData): Observable<boolean>;
  abstract removeMediaFromInvestigation(investigation_id: number, media_id: number): Observable<boolean>;
}
