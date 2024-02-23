import {inject, Injectable} from "@angular/core";
import {MediaService} from "./media.service";
import {MediaLocationService} from "./media-location.service";
import {WebsiteService} from "./website.service";
import {InvestigationService} from "./investigation.service";
import {MediaModel} from "../domain/media.model";
import {BehaviorSubject} from "rxjs";
import {InvestigationModel} from "../domain/investigation.model";
import {MediaLocationModel} from "../domain/media-location.model";
import {WebsiteModel} from "../domain/website.model";


@Injectable({
    providedIn: 'root'
})
export class SessionService {
    private mediaService: MediaService = inject(MediaService);
    private mediaLocationService: MediaLocationService = inject(MediaLocationService);
    private websiteService: WebsiteService = inject(WebsiteService);
    private investigationService: InvestigationService = inject(InvestigationService);

    private currentInvestigation : BehaviorSubject<InvestigationModel|null> = new BehaviorSubject<InvestigationModel|null>(null);
    investigations: BehaviorSubject<InvestigationModel[]> = new BehaviorSubject<InvestigationModel[]>([]);
    medias: BehaviorSubject<MediaModel[]> = new BehaviorSubject<MediaModel[]>([]);
    mediaLocations: BehaviorSubject<MediaLocationModel[]> = new BehaviorSubject<MediaLocationModel[]>([]);
    websites: BehaviorSubject<WebsiteModel[]> = new BehaviorSubject<WebsiteModel[]>([]);


    constructor() {
        this.investigationService.getAllInvestigations().subscribe(investigations => this.investigations.next(investigations));
    }
}
