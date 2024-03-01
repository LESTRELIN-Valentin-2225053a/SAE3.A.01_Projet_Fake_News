import {WebsiteModel} from "../domain/website.model";
import {Observable} from "rxjs";

export abstract class WebsiteRepository {
  abstract getAllWebsites(): Observable<WebsiteModel[]>;

  abstract getWebsiteById(id : number): Observable<WebsiteModel>

  abstract getWebsitesByInvestigationId(id : number): Observable<WebsiteModel[]>;
}
