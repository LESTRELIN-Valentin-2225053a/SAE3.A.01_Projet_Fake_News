import {WebsiteModel} from "../domain/website.model";
import {Observable} from "rxjs";

export abstract class WebsiteRepository {
  abstract getAllWebsites(): Observable<WebsiteModel[]>;

  abstract getWebsiteById(id : number): Observable<WebsiteModel>

  abstract getWebsitesByInvestigationId(id : number): Observable<WebsiteModel[]>;

  //abstract createWebsite(title: string, description: string, url: string, investigation_id: number): Observable<boolean>;
}
