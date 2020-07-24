import { PatientDataModel } from "./PatientDataModel";
import {ISearchFilter} from './ISearchFilter';
import { SearchByMRN } from "./SearchByMRN";
import { SearchByName } from "./SearchByName";
export class PatientDataProvider {
    public listOfPateinets: PatientDataModel[];
    
    public getPatientDetails(serahcFilter: ISearchFilter): boolean {
        // serahcFilter = new SearchByMRN('mrn');
        // serahcFilter = new SearchByName('name');
         let isPatientFound = serahcFilter.searchPatientFilter(this.listOfPateinets[0]);
         return isPatientFound;
    }
}