import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MediaModel} from "../domain/media.model";
import {MediaRepository} from "../repositories/media.repository";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private mediaRepository: MediaRepository) {
  }

  getMediaById(id : number) : Observable<MediaModel> {
    return this.mediaRepository.getMediaById(id);
  }

  getMediasByInvestigationId(id : number): Observable<MediaModel[]> {
    return this.mediaRepository.getMediasByInvestigationId(id);
  }

  getMediasByInvestigationIdForUser(id: number): Observable<MediaModel[]>{
    return this.mediaRepository.getMediasByInvestigationIdForUser(id);
  }

  updateMediasByInvestigationIdForUser(id: number, medias : MediaModel[]) : Observable<boolean> {
    return this.mediaRepository.updateMediasByInvestigationIdForUser(id,medias);
  }

  getAllMedias(): Observable<MediaModel[]> {
    return this.mediaRepository.getAllMedias();
  }

  checkIfValuesAreCorrect(medias : MediaModel[]){
    if (medias.length === 0) return false;
    let result = true;
    medias.every(media => {
      return result = media.trustWorthy == media.userTrustWorthy;
    });
    return result;
  }
}
