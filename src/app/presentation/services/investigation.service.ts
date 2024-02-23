import {Injectable} from "@angular/core";
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class InvestigationService {
    async getAllInvestigations(){
        return axios.get('http://sae3-a-01-api.alwaysdata.net/api/investigation/all');
    }
}
