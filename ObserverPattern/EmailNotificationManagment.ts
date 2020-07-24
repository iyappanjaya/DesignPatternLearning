import { INotificationObserver } from "./INotificationObserver";
import { IAppoitnmentSubject } from "./IAppoitnmentSubject";

export class EmailNotificationManagment implements INotificationObserver{
    updateStatus(status: string) {
         // send Email
    }
    constructor(statusSubject: IAppoitnmentSubject){
        statusSubject.subscribe(this);
    }
}