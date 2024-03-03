import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {WebsiteModel} from "../domain/website.model";
import {WebsiteRepository} from "../repositories/website.repository";

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private websiteRepository: WebsiteRepository) {
  }

  getAllWebsites(): Observable<WebsiteModel[]>{
    return this.websiteRepository.getAllWebsites();
  }

  getWebsiteById(id : number): Observable<WebsiteModel> {
    return this.websiteRepository.getWebsiteById(id);
  }

  getWebsitesByInvestigationId(id : number): Observable<WebsiteModel[]> {
    return this.websiteRepository.getWebsitesByInvestigationId(id);
  }
}
