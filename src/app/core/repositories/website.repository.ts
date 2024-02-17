import {WebsiteModel} from "../domain/website.model";
import {Observable} from "rxjs";

export interface WebsiteRepository {
  getAllWebsites(): Observable<WebsiteModel[]>;

  getWebsiteById(id : number): Observable<WebsiteModel>

  getWebsitesByInvestigationId(id : number): Observable<WebsiteModel[]>;
}
