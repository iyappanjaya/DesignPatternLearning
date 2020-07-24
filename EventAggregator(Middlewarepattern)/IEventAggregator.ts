import { EventType } from "./EventType";
import { IObserver } from "./IObserver";

export interface IEventAggregator {
    subscribe(event: EventType, observer: IObserver);
    unsubscribe(event: EventType, observer: IObserver);
    publish(event: EventType, data: string);
}