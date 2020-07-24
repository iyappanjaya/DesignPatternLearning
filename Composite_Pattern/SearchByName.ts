import {PatientDataModel} from './PatientDataModel';
import { ISearchFilter } from './ISearchFilter';
export class SearchByName implements ISearchFilter{
    searchFilter:string;
    searchPatientFilter(pateintData: PatientDataModel) {
        return pateintData.name === this.searchFilter;
    }
    constructor(type:string) {
        this.searchFilter = type;
    }
}