import {PatientDataModel} from './PatientDataModel';
import { ISearchFilter } from './ISearchFilter';
export class SearchByMRN implements ISearchFilter{
    searchFilter:string;
    searchPatientFilter(pateintData: PatientDataModel) {
        return pateintData.mrn === this.searchFilter;
    }
    constructor(type:string) {
        this.searchFilter = type;
    }
}