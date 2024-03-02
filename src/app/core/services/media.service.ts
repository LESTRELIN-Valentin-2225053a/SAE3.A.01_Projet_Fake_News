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

  getAllMedias(): Observable<MediaModel[]> {
    return this.mediaRepository.getAllMedias();
  }

  checkIfValuesAreCorrect(medias : MediaModel[]){
    let result = true;
    medias.every(media => {
      return result = media.trustWorthy == media.userTrustWorthy;
    });
    return result;
  }
}
