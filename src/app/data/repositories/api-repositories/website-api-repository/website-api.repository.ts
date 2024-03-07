import {ApiRepository} from "../api.repository";
import {WebsiteRepository} from "../../../../core/repositories/website.repository";
import {catchError, map, Observable, of} from "rxjs";
import {WebsiteModel} from "../../../../core/domain/website.model";
import {WebsiteApiEntity} from "./website-api-entity";
import {WebsiteApiRepositoryMapper} from "./website-api-repository.mapper";
import {Injectable} from "@angular/core";

/**
 * Repository class for handling API requests related to investigations.
 * This class implements the InvestigationRepository interface.
 * Handles operations such as retrieving all websites, getting a website by ID,
 * and fetching websites associated with a specific investigation.
 */
@Injectable({
  providedIn: 'root'
})
export class WebsiteApiRepository extends ApiRepository implements WebsiteRepository {

  /** Mapper instance for mapping between API entities and domain models. */
  mapper = new WebsiteApiRepositoryMapper();

  /**
   * @inheritDoc
   */
  getAllWebsites(): Observable<WebsiteModel[]> {
    return this.http
      .get<WebsiteApiEntity[]>(`${this.apiUrl}/website/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  getWebsiteById(id: number): Observable<WebsiteModel> {
    return this.http
      .get<WebsiteApiEntity>(`${this.apiUrl}/website/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  getWebsitesByInvestigationId(id: number): Observable<WebsiteModel[]> {
    return this.http
      .get<WebsiteApiEntity[]>(`${this.apiUrl}/common/investigation/${id}/websites`)
      .pipe(map(this.mapper.mapFromList));
  }

  /**
   * @inheritDoc
   */
  newWebsite(formData : FormData): Observable<WebsiteModel> {
    return this.http
      .post<WebsiteApiEntity>(`${this.apiUrl}/admin/website/new`, formData, { withCredentials: true })
      .pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  updateWebsite(id: number, formData : FormData): Observable<WebsiteModel> {
    return this.http
      .post<WebsiteApiEntity>(`${this.apiUrl}/admin/website/update/${id}`, formData, { withCredentials: true })
      .pipe(map(this.mapper.mapFrom));
  }

  /**
   * @inheritDoc
   */
  deleteWebsite(id: number): Observable<boolean> {
    return this.http
      .delete(`${this.apiUrl}/admin/website/delete/${id}`, { observe: 'response', withCredentials: true })
      .pipe(map(() => {
        return true;
      }), catchError(() => {
        return of(false);
      }));
  }
}
