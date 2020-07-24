import { IEventAggregator } from "./IEventAggregator";
import { EventType } from "./EventType";
import {IObserver} from './IObserver'

export interface IEventDictinoary {
    event: EventType;
    listOfObserver: IObserver [];
}
export class EventAggregator implements IEventAggregator {
    private listOfEvents:  IEventDictinoary[];
    subscribe(event: EventType, observer:IObserver) {
       this.listOfEvents.push({event: event, listOfObserver: [observer]});
    }    
    unsubscribe(event: EventType, observer: IObserver) {
        // remove from observer from evnt subsctribed list
    }
    publish(eventType: EventType, data: string) {
        let eventList:IEventDictinoary =  this.listOfEvents.filter(item => item.event === eventType)[0];
        eventList.listOfObserver.forEach((item)=>{
            item.updateStatus();
        });
    }
}