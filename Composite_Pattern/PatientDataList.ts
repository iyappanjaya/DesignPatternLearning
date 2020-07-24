import {PatientDataModel} from './PatientDataModel';
import {PatientDataProvider} from './PateintDataProvider';
import { SearchByMRN } from './SearchByMRN';
import { SearchByName } from './SearchByName';
import { SearchByMany } from './SearchByMany';
export class PatientDataList {
    public listOfPatient: PatientDataModel[];
    filterPatinet: PatientDataProvider;
    constructor(){
    }
    searchList(): PatientDataModel[]{
        // return this.filterPatinet.getPatientDetails(new SearchByMRN('123456'));
        // return this.filterPatinet.getPatientDetails(new SearchByName('Jon'));
        let searchMany = new SearchByMany();
        searchMany.addFilter(new SearchByMRN('123456'));
        searchMany.addFilter(new SearchByName('jon'))
        return this.filterPatinet.getPatientDetails(searchMany)
    }
}