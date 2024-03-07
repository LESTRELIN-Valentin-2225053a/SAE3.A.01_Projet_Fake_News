import {InvestigationRepository} from "../../../../core/repositories/investigation.repository";
import {catchError, map, Observable, of} from "rxjs";
import {InvestigationModel} from "../../../../core/domain/investigation.model";
import {ApiRepository} from "../api.repository";
import {InvestigationApiRepositoryMapper} from "./investigation-api-repository.mapper";
import {InvestigationApiEntity} from "./investigation-api-entity";
import {Injectable} from "@angular/core";

/**
 * Repository class for handling API requests related to investigations.
 * This class implements the InvestigationRepository interface.
 */
@Injectable({
  providedIn: 'root'
})
export class InvestigationApiRepository extends ApiRepository implements InvestigationRepository{

  /** Mapper instance for mapping between API entities and domain models. */
  mapper = new InvestigationApiRepositoryMapper();

  /**
   * @inheritDoc
   */
  getAllInvestigations(): Observable<InvestigationModel[]> {
    return this.http
      .get<InvestigationApiEntity[]>(`${this.apiUrl}/guest/investigation/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  getInvestigationById(id: number): Observable<InvestigationModel> {
    return this.http
      .get<InvestigationApiEntity>(`${this.apiUrl}/guest/investigation/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  getAllInvestigationsForUser(): Observable<InvestigationModel[]> {
    return this.http
      .get<InvestigationApiEntity[]>(`${this.apiUrl}/user/investigation/all`,{withCredentials: true})
      .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  getInvestigationByIdForUser(id: number): Observable<InvestigationModel> {
    return this.http
      .get<InvestigationApiEntity>(`${this.apiUrl}/user/investigation/${id}`,{withCredentials: true})
      .pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  updateCompletionOfInvestigationByIdForUser(id: number): Observable<boolean> {
    return this.http
      .put(`${this.apiUrl}/user/investigation/${id}/complete`,{},{withCredentials: true})
      .pipe(map(() => true),
          catchError(() => { return of(false); }));
  }

  /**
   * @inheritDoc
   */
  deleteInvestigation(id: number): Observable<boolean> {
    return this.http.delete(`${this.apiUrl}/admin/investigation/delete/${id}`, { observe: 'response', withCredentials: true }).pipe(
      map(response => response.status === 204));
  }

  /**
   * @inheritDoc
   */
  newInvestigation(title: string, description: string, explanation: string, board_type: string): Observable<InvestigationModel> {
    console.log(title, description, explanation, board_type);
    return this.http.post<InvestigationApiEntity>(`${this.apiUrl}/admin/investigation/new`, {
      title: title,
      description: description,
      explanation: explanation,
      board_type: board_type
    }, {withCredentials: true}).pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  updateInvestigation(id: number, title: string, description: string, explication: string, board_type: string): Observable<InvestigationModel> {
    return this.http.put<InvestigationApiEntity>(`${this.apiUrl}/admin/investigation/update/${id}`, {
      title: title,
      description: description,
      explanation: explication,
      board_type: board_type
    }, {withCredentials: true}).pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  linkWebsiteToInvestigation(investigation_id: number, website_id: number): Observable<boolean> {
    return this.http.put(`${this.apiUrl}/admin/website/${website_id}/link/${investigation_id}`, {}, {withCredentials: true})
      .pipe(map(() => {
        return true;
      }), catchError(() => {
        return of(false);
      }));
  }

  /**
   * @inheritDoc
   */
  removeWebsiteFromInvestigation(investigation_id: number, website_id: number): Observable<boolean> {
    return this.http.put(`${this.apiUrl}/admin/investigation/${investigation_id}/removeWebsite/${website_id}`, {},{withCredentials: true})
      .pipe(map(() => {
        return true;
      }), catchError(() => {
        return of(false);
      }));
  }

  /**
   * @inheritDoc
   */
  linkMediaToInvestigation(investigation_id: number, media_id: number, formdata : FormData): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/admin/media/${media_id}/link/${investigation_id}`, formdata, {withCredentials: true})
      .pipe(map(() => {
        return true;
      }), catchError(() => {
        return of(false);
      }));
  }

  /**
   * @inheritDoc
   */
  removeMediaFromInvestigation(investigation_id: number, media_id: number): Observable<boolean> {
    return this.http.put(`${this.apiUrl}/admin/investigation/${investigation_id}/removeMedia/${media_id}`, {},{withCredentials: true})
      .pipe(map(() => {
        return true;
      }), catchError(() => {
        return of(false);
      }));
  }
}
