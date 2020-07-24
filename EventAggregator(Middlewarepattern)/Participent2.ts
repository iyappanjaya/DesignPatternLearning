import { IObserver } from "./IObserver";
import { EventAggregator } from "./EventAggregator";
import { EventType } from "./EventType";

export class Participent2 extends EventAggregator implements IObserver {
    // public eventAgg: EventAggregator = new EventAggregator();
    constructor(){
        super();
        this.subscribe(EventType.Onupdate, this);
    }
    updateStatus() {
        this.publish(EventType.OnSearchCompleted, 'data');
    }
}