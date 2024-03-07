import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {InvestigationRepository} from "../repositories/investigation.repository";
import {WebsiteRepository} from "../repositories/website.repository";
import {UserRepository} from "../repositories/user.repository";
import {WebsiteModel} from "../domain/website.model";
import {MediaRepository} from "../repositories/media.repository";
import {MediaModel} from "../domain/media.model";

/**
 * The AdminService provides functionality related to administrative operations in the application.
 * It interacts with repositories to perform various administrative tasks.
 */
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private investigationRepository: InvestigationRepository,
              private userRepository : UserRepository,
              private websiteRepository : WebsiteRepository,
              private mediaRepository : MediaRepository) {}


  /**
   * Blocks a user by their ID.
   * @param id The ID of the user to block.
   * @returns An observable indicating whether the user was successfully blocked.
   */
  blockUser(id: number): Observable<boolean> {
    return this.userRepository.blockUser(id);
  }

  /**
   * Deletes an investigation by its ID.
   * @param id The ID of the investigation to delete.
   * @returns An observable indicating whether the investigation was successfully deleted.
   */
  deleteInvestigation(id: number): Observable<boolean> {
    return this.investigationRepository.deleteInvestigation(id);
  }

  /**
   * Deletes a user by their ID.
   * @param id The ID of the user to delete.
   * @returns An observable indicating whether the user was successfully deleted.
   */
  deleteUser(id: number): Observable<boolean> {
    return this.userRepository.deleteUser(id);
  }

  /**
   * Creates a new investigation.
   * @param title The title of the investigation.
   * @param description The description of the investigation.
   * @param explanation Additional explanation or notes about the investigation.
   * @param board_type The type of board used in the investigation ('DRAGGABLE' or 'VALIDABLE').
   * @returns An observable representing the new investigation.
   */
  newInvestigation(title: string, description: string, explanation: string, board_type: string) {
    return this.investigationRepository.newInvestigation(title, description, explanation, board_type);
  }

  /**
   * Promotes a user to admin by their ID.
   * @param id The ID of the user to promote.
   * @returns An observable indicating whether the user was successfully promoted.
   */
  promoteUser(id: number): Observable<boolean> {
    return this.userRepository.promoteUser(id);
  }

  /**
   * Unblocks a user by their ID.
   * @param id The ID of the user to unblock.
   * @returns An observable indicating whether the user was successfully unblocked.
   */
  unblockUser(id: number): Observable<boolean> {
    return this.userRepository.unblockUser(id);
  }

  /**
   * Updates an investigation by its ID.
   * @param id The ID of the investigation to update.
   * @param title The updated title of the investigation.
   * @param description The updated description of the investigation.
   * @param explication The updated explanation of the investigation.
   * @param board_type The updated type of board used in the investigation ('DRAGGABLE' or 'VALIDABLE').
   * @returns An observable indicating whether the investigation was successfully updated.
   */
  updateInvestigation(id: number, title: string, description: string, explication: string, board_type: string) {
    return this.investigationRepository.updateInvestigation(id, title, description, explication, board_type);
  }

  /**
   * Links a website to an investigation.
   * @param investigation_id The ID of the investigation.
   * @param website_id The ID of the website to link.
   * @returns An observable indicating whether the link operation was successful.
   */
  linkWebsiteToInvestigation(investigation_id: number, website_id: number): Observable<boolean> {
    return this.investigationRepository.linkWebsiteToInvestigation(investigation_id, website_id);
  }

  /**
   * Removes a website from an investigation.
   * @param investigation_id The ID of the investigation.
   * @param website_id The ID of the website to remove.
   * @returns An observable indicating whether the removal operation was successful.
   */
  removeWebsiteFromInvestigation(investigation_id: number, website_id: number): Observable<boolean> {
    return this.investigationRepository.removeWebsiteFromInvestigation(investigation_id, website_id);
  }

  /**
   * Creates a new website.
   * @param formData The form data containing information about the new website.
   * @returns An observable representing the new website.
   */
  newWebsite(formData : FormData): Observable<WebsiteModel> {
    return this.websiteRepository.newWebsite(formData);
  }

  /**
   * Updates a website by its ID.
   * @param id The ID of the website to update.
   * @param formData The form data containing updated information about the website.
   * @returns An observable indicating whether the update operation was successful.
   */
  updateWebsite(id: number, formData : FormData): Observable<WebsiteModel> {
    return this.websiteRepository.updateWebsite(id, formData);
  }

  /**
   * Deletes a website by its ID.
   * @param id The ID of the website to delete.
   * @returns An observable indicating whether the delete operation was successful.
   */
  deleteWebsite(id: number): Observable<boolean> {
    return this.websiteRepository.deleteWebsite(id);
  }

  /**
   * Creates a new media.
   * @param formdata The form data containing information about the new media.
   * @returns An observable representing the new media.
   */
  newMedia(formdata : FormData): Observable<MediaModel> {
    return this.mediaRepository.newMedia(formdata);
  }

  /**
   * Updates a media by its ID.
   * @param id The ID of the media to update.
   * @param formData The form data containing updated information about the media.
   * @returns An observable indicating whether the update operation was successful.
   */
  updateMedia(id: number, formData : FormData): Observable<MediaModel> {
    return this.mediaRepository.updateMedia(id, formData);
  }

  /**
   * Adds a link file to a media.
   * @param id The ID of the media.
   * @param formdata The form data containing the link file information.
   * @returns An observable indicating whether the operation was successful.
   */
  addingLinkFileToMedia(id: number, formdata : FormData): Observable<MediaModel> {
    return this.mediaRepository.addingLinkFileToMedia(id, formdata);
  }

  /**
   * Deletes a media by its ID.
   * @param id The ID of the media to delete.
   * @returns An observable indicating whether the delete operation was successful.
   */
  deleteMedia(id: number): Observable<boolean> {
    return this.mediaRepository.deleteMedia(id);
  }

  /**
   * Links a media to an investigation.
   * @param website_id The ID of the website.
   * @param media_id The ID of the media to link.
   * @param formData The form data containing additional information.
   * @returns An observable indicating whether the link operation was successful.
   */
  linkMediaToInvestigation(website_id: number, media_id: number, formData : FormData): Observable<boolean> {
    return this.investigationRepository.linkMediaToInvestigation(website_id, media_id, formData);
  }

  /**
   * Removes a media from an investigation.
   * @param website_id The ID of the website.
   * @param media_id The ID of the media to remove.
   * @returns An observable indicating whether the removal operation was successful.
   */
  removeMediaFromInvestigation(website_id: number, media_id: number): Observable<boolean> {
    return this.investigationRepository.removeMediaFromInvestigation(website_id, media_id);
  }
}
