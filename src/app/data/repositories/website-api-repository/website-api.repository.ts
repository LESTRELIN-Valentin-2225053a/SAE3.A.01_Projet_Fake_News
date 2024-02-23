import {ApiRepository} from "../api.repository";
import {WebsiteRepository} from "../../../core/repositories/website.repository";
import {map, Observable, of} from "rxjs";
import {WebsiteModel} from "../../../core/domain/website.model";
import {InvestigationApiEntity} from "../investigation-api-repository/investigation-api-entity";
import {WebsiteApiEntity} from "./website-api-entity";
import {WebsiteApiRepositoryMapper} from "./website-api-repository.mapper";
// /api/website/
export class WebsiteApiRepository extends ApiRepository implements WebsiteRepository {
  mapper = new WebsiteApiRepositoryMapper();

  getAllWebsites(): Observable<WebsiteModel[]> {
    return of([]);
  }

  getWebsiteById(id: number): Observable<WebsiteModel> {
    return of();
  }

  getWebsitesByInvestigationId(id: number): Observable<WebsiteModel[]> {
    return this.http
      .get<WebsiteApiEntity[]>(`${this.apiUrl}/api/website/${id}`)
      .pipe(map(this.mapper.mapFromList));
  }

}
