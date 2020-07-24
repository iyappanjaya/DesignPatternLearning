import {PatientDataModel} from './PatientDataModel';
import {PatientDataProvider} from './PateintDataProvider';
import { SearchByMRN } from './SearchByMRN';
import { SearchByName } from './SearchByName';
export class PatientDataList {
    public listOfPatient: PatientDataModel[];
    filterPatinet: PatientDataProvider;
    constructor(){
    }
    isPatientFound(){
        return this.filterPatinet.getPatientDetails(new SearchByMRN('123456'));
        // return this.filterPatinet.getPatientDetails(new SearchByName('Jon'));
    }
}