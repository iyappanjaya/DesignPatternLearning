import { PatientDataModel } from "./PatientDataModel";
import {ISearchFilter} from './ISearchFilter';
import { SearchByMRN } from "./SearchByMRN";
import { SearchByName } from "./SearchByName";
export class PatientDataProvider {
    public listOfPateinets: PatientDataModel[];
    public searchResult: PatientDataModel[];
    public getPatientDetails(serahcFilter: ISearchFilter): PatientDataModel[] {
        // serahcFilter = new SearchByMRN('mrn');
        // serahcFilter = new SearchByName('name');
        this.listOfPateinets.forEach((item: PatientDataModel) => {
            if(serahcFilter.searchPatientFilter(item)){
                this.searchResult.push(item);
            }
        });
        return this.searchResult;
    }
}