import {inject, Injectable} from '@angular/core';
import {Media} from "../interfaces/media";
import {MediaService} from "./media.service";
import {MediaLocation} from "../interfaces/media-location";
import {MediaLocationService} from "./media-location.service";
import {Investigation} from "../interfaces/investigation";
import {InvestigationService} from "./investigation.service";
import {Website} from "../interfaces/website";
import {WebsiteService} from "./website.service";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
    actualInvestigation: Investigation = {investigation_id : -1} as Investigation;
    medias: Media[] = [];
    mediaLocations: MediaLocation[] = [];
    websites: Website[] = [];

    investigations: Investigation[] = [];
    currentInvestigationOnPage: Investigation = {} as Investigation;
    page: number = 1;
    isConductingInvestigation: boolean = false;
    isCorrect = true;
    correctionMessage = "";

    private mediaService: MediaService = inject(MediaService);
    private mediaLocationService: MediaLocationService = inject(MediaLocationService);
    private websiteService: WebsiteService = inject(WebsiteService);
    private investigationService: InvestigationService = inject(InvestigationService);


    constructor() {
        this.investigationService.getAllInvestigations().then(
            response => {
                this.investigations = response.data;
                this.currentInvestigationOnPage = this.investigations[0];
            }
        )
    }

    public changeInvestigation(investigation: Investigation) {
        this.actualInvestigation = investigation;
        console.log(this.actualInvestigation);
        this.mediaService.getMediasByInvestigationId(this.actualInvestigation.investigation_id).then(
            response => {
                console.log(response.data);
                this.medias = response.data;
            }
        );
        this.mediaLocationService.getMediaLocationsByInvestigationId(this.actualInvestigation.investigation_id).then(
            response => {
                const responseData = response.data;
                responseData.forEach((value: { x: number; y: number; expected_media_id: number; description: string; explication: string}) => {
                    this.mediaLocations.push(
                        {
                            x: value.x,
                            y: value.y,
                            media: {id: -1} as Media,
                            expected_media_id: value.expected_media_id,
                            description: value.description,
                            explication: value.explication
                        });
                })
            }
        );
        this.websiteService.getWebsitesByInvestigationId(this.actualInvestigation.investigation_id).then(
            response => {
                this.websites = response.data;
            }
        )
    }


    public validateInvestigation() : boolean {
        let result : boolean = true;
        if (this.actualInvestigation.board_type == 'DRAGGABLE') {
            this.mediaLocations.every(mediaLocation => {
                return result = mediaLocation.media.id == mediaLocation.expected_media_id;
            })
            console.log(result);
        } else {
            this.medias.every(media => {
                return result = media.trustWorthy == media.userTrustWorthy;
            })
        }
        return result;
    }

}
