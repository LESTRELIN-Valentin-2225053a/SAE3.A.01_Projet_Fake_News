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

  /**
   * Creates a new website.
   * @param formData The form data containing information about the new website.
   * @returns An observable of the newly created website model.
   */
  abstract newWebsite(formData: FormData): Observable<WebsiteModel>;

  /**
   * Updates a website by its ID.
   * @param id The ID of the website to update.
   * @param formData The form data containing updated information about the website.
   * @returns An observable of the updated website model.
   */
  abstract updateWebsite(id: number, formData : FormData): Observable<WebsiteModel>;

  /**
   * Deletes a website by its ID.
   * @param id The ID of the website to delete.
   * @returns An observable indicating whether the delete operation was successful.
   */
  abstract deleteWebsite(id: number): Observable<boolean>;
}

