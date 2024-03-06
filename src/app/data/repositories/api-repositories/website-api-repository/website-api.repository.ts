import {ApiRepository} from "../api.repository";
import {WebsiteRepository} from "../../../../core/repositories/website.repository";
import {map, Observable} from "rxjs";
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
  mapper = new WebsiteApiRepositoryMapper();

  getAllWebsites(): Observable<WebsiteModel[]> {
    return this.http
      .get<WebsiteApiEntity[]>(`${this.apiUrl}/website/all`)
      .pipe(map(this.mapper.mapFromList));
  }

  getWebsiteById(id: number): Observable<WebsiteModel> {
    return this.http
      .get<WebsiteApiEntity>(`${this.apiUrl}/website/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  getWebsitesByInvestigationId(id: number): Observable<WebsiteModel[]> {
    return this.http
      .get<WebsiteApiEntity[]>(`${this.apiUrl}/common/investigation/${id}/websites`)
      .pipe(map(this.mapper.mapFromList));
  }
}
