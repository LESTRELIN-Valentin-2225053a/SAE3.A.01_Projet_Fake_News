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

  getMediasByInvestigationIdAndUserId(investigationId : number, userId : number): Observable<MediaModel[]>{
    return this.mediaRepository.getMediasByInvestigationIdAndUserId(investigationId,userId);
  }

  getAllMedias(): Observable<MediaModel[]> {
    return this.mediaRepository.getAllMedias();
  }
}
