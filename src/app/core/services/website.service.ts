import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {WebsiteModel} from "../domain/website.model";
import {WebsiteRepository} from "../repositories/website.repository";

/**
 * Service responsible for managing website-related operations.
 * Acts as an intermediary between components/controllers and the website repository.
 */
@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  /**
   * Constructs a new WebsiteService instance.
   * @param websiteRepository The website repository used to interact with website data.
   */
  constructor(private websiteRepository: WebsiteRepository) {}

  /**
   * Retrieves all websites.
   * @returns An Observable emitting an array of WebsiteModel objects.
   */
  getAllWebsites(): Observable<WebsiteModel[]>{
    return this.websiteRepository.getAllWebsites();
  }

  /**
   * Retrieves a website by its ID.
   * @param id The ID of the website to retrieve.
   * @returns An Observable emitting the WebsiteModel object with the specified ID.
   */
  getWebsiteById(id : number): Observable<WebsiteModel> {
    return this.websiteRepository.getWebsiteById(id);
  }

  /**
   * Retrieves all websites associated with a specific investigation.
   * @param id The ID of the investigation to retrieve websites for.
   * @returns An Observable emitting an array of WebsiteModel objects associated with the investigation.
   */
  getWebsitesByInvestigationId(id : number): Observable<WebsiteModel[]>{
    return this.websiteRepository.getWebsitesByInvestigationId(id);
  }
}
