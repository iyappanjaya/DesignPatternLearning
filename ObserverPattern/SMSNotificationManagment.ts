import { INotificationObserver } from "./INotificationObserver";
import { IAppoitnmentSubject } from "./IAppoitnmentSubject";

export class SMSNotificationManagment implements INotificationObserver{
    updateStatus(status: string) {
        // send SMS
    }
    constructor(statusSubject: IAppoitnmentSubject){
        statusSubject.subscribe(this);
    }
}