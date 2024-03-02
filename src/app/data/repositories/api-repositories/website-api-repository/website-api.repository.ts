import {ApiRepository} from "../api.repository";
import {WebsiteRepository} from "../../../../core/repositories/website.repository";
import {map, Observable} from "rxjs";
import {WebsiteModel} from "../../../../core/domain/website.model";
import {WebsiteApiEntity} from "./website-api-entity";
import {WebsiteApiRepositoryMapper} from "./website-api-repository.mapper";
import {Injectable} from "@angular/core";

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
