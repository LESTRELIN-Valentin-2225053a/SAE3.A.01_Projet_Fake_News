import {WebsiteModel} from "../domain/website.model";
import {Observable} from "rxjs";

export abstract class WebsiteRepository {
  abstract getAllWebsites(): Observable<WebsiteModel[]>;

  abstract getWebsiteById(id : number): Observable<WebsiteModel>

  abstract getWebsitesByInvestigationId(id : number): Observable<WebsiteModel[]>;

  abstract newWebsite(formData: FormData): Observable<WebsiteModel>;

  abstract updateWebsite(id: number, formData : FormData): Observable<WebsiteModel>;

  abstract deleteWebsite(id: number): Observable<boolean>;
}
