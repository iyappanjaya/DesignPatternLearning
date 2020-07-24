import { IAppoitnmentSubject } from "./IAppoitnmentSubject";
import { INotificationObserver } from "./INotificationObserver";

export class AppoitnmentSubject implements IAppoitnmentSubject{
    public status: string;
    private notifictaionObservers: INotificationObserver[];
    subscribe(observer: INotificationObserver) {
        this.notifictaionObservers.push(observer);
    }    
    unsubscribe(observer: INotificationObserver) {
       let index: number = this.notifictaionObservers.findIndex(item => item === observer);
       this.notifictaionObservers.slice(index);
    }
    updateObserverStatus(){
        this.notifictaionObservers.forEach(item =>{
            item.updateStatus(status);
        })
    }
}