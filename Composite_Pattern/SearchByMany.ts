import { ISearchFilter } from './ISearchFilter';
import {PatientDataModel} from './PatientDataModel';
export class SearchByMany implements ISearchFilter {
    listOfFilter: ISearchFilter[];
    // searchFilter:string;
    searchPatientFilter(pateintData: PatientDataModel){
        let result: boolean;
        this.listOfFilter.forEach((item: ISearchFilter)=>{
            result = result && item.searchPatientFilter(pateintData);
        });
        return result;
        // return pateintData.mrn === this.searchFilter;
    }
    addFilter(filter: ISearchFilter){
        this.listOfFilter.push(filter);
    }
    removeFilter(filter: ISearchFilter){
        let index = this.listOfFilter.findIndex(item => item === filter)
        this.listOfFilter.splice(index);
    }
    // constructor(type:string) {
    //     this.searchFilter = type;
    // }
}