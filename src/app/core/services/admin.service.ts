import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {InvestigationRepository} from "../repositories/investigation.repository";
import {WebsiteRepository} from "../repositories/website.repository";
import {UserRepository} from "../repositories/user.repository";
import {WebsiteModel} from "../domain/website.model";
import {MediaRepository} from "../repositories/media.repository";
import {MediaModel} from "../domain/media.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private investigationRepository: InvestigationRepository,
              private userRepository : UserRepository,
              private websiteRepository : WebsiteRepository,
              private mediaRepository : MediaRepository) {}


  blockUser(id: number): Observable<boolean> {
    return this.userRepository.blockUser(id);
  }

  deleteInvestigation(id: number): Observable<boolean> {
    return this.investigationRepository.deleteInvestigation(id);
  }

  deleteUser(id: number): Observable<boolean> {
    return this.userRepository.deleteUser(id);
  }

  newInvestigation(title: string, description: string, explanation: string, board_type: string) {
    return this.investigationRepository.newInvestigation(title, description, explanation, board_type);
  }

  promoteUser(id: number): Observable<boolean> {
    return this.userRepository.promoteUser(id);
  }

  unblockUser(id: number): Observable<boolean> {
    return this.userRepository.unblockUser(id);
  }

  updateInvestigation(id: number, title: string, description: string, explication: string, board_type: string) {
    return this.investigationRepository.updateInvestigation(id, title, description, explication, board_type);
  }

  linkWebsiteToInvestigation(investigation_id: number, website_id: number): Observable<boolean> {
    return this.investigationRepository.linkWebsiteToInvestigation(investigation_id, website_id);
  }

  removeWebsiteFromInvestigation(investigation_id: number, website_id: number): Observable<boolean> {
    return this.investigationRepository.removeWebsiteFromInvestigation(investigation_id, website_id);
  }

  newWebsite(formdata : FormData): Observable<WebsiteModel> {
    return this.websiteRepository.newWebsite(formdata);
  }

  updateWebsite(id: number, formdata : FormData): Observable<WebsiteModel> {
    return this.websiteRepository.updateWebsite(id, formdata);
  }

  deleteWebsite(id: number): Observable<boolean> {
    return this.websiteRepository.deleteWebsite(id);
  }

  newMedia(formdata : FormData): Observable<MediaModel> {
    return this.mediaRepository.newMedia(formdata);
  }

  updateMedia(id: number, formdata : FormData): Observable<MediaModel> {
    return this.mediaRepository.updateMedia(id, formdata);
  }

  addingLinkFileToMedia(id: number, formdata : FormData): Observable<MediaModel> {
    return this.mediaRepository.addingLinkFileToMedia(id, formdata);
  }

  deleteMedia(id: number): Observable<boolean> {
    return this.mediaRepository.deleteMedia(id);
  }

  linkMediaToInvestigation(website_id: number, media_id: number, formdata : FormData): Observable<boolean> {
    return this.investigationRepository.linkMediaToInvestigation(website_id, media_id, formdata);
  }

  removeMediaFromInvestigation(website_id: number, media_id: number): Observable<boolean> {
    return this.investigationRepository.removeMediaFromInvestigation(website_id, media_id);
  }
}
