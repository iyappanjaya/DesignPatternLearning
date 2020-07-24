import { INotificationObserver } from "./INotificationObserver";

export interface IAppoitnmentSubject {
    subscribe(observer: INotificationObserver);
    unsubscribe(observer: INotificationObserver);
}