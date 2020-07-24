import { AppoitnmentSubject } from "./AppoitnmentSubject";
import { EmailNotificationManagment } from "./EmailNotificationManagment";
import { SMSNotificationManagment } from "./SMSNotificationManagment";

export class AppoitnmentManagment {
    public appoitnmentSubject: AppoitnmentSubject;
    constructor(){
        this.appoitnmentSubject = new AppoitnmentSubject();
    }
    public bookAppoitment(){
        this.appoitnmentSubject.status = 'BOOKED';
        this.notifiationList();
        this.appoitnmentSubject.updateObserverStatus();
    }
    public cancelAppoitment(){
        this.appoitnmentSubject.status = 'CANCELED';
        this.notifiationList();
        this.appoitnmentSubject.updateObserverStatus();
    }
    private notifiationList(){
        new EmailNotificationManagment(this.appoitnmentSubject);
        new SMSNotificationManagment(this.appoitnmentSubject);
    }
}