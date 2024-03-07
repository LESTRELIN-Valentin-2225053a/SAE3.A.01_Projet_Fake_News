import {WebsiteModel} from "../domain/website.model";
import {Observable} from "rxjs";

/**
 * Abstract class representing a repository for website-related operations.
 */
export abstract class WebsiteRepository {
  /**
   * Retrieves all websites.
   * @returns An observable array of website models.
   */
  abstract getAllWebsites(): Observable<WebsiteModel[]>;

  /**
   * Retrieves a website by its ID.
   * @param id The ID of the website to retrieve.
   * @returns An observable of the website model.
   */
  abstract getWebsiteById(id: number): Observable<WebsiteModel>;

  /**
   * Retrieves websites associated with a specific investigation.
   * @param id The ID of the investigation.
   * @returns An observable array of website models associated with the investigation.
   */
  abstract getWebsitesByInvestigationId(id: number): Observable<WebsiteModel[]>;
  abstract newWebsite(formData: FormData): Observable<WebsiteModel>;

  abstract updateWebsite(id: number, formData : FormData): Observable<WebsiteModel>;

  abstract deleteWebsite(id: number): Observable<boolean>;
}

