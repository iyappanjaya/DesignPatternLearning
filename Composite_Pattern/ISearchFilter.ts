import { PatientDataModel } from './PatientDataModel';
export interface ISearchFilter {
     searchPatientFilter(pateintData: PatientDataModel): boolean;
}