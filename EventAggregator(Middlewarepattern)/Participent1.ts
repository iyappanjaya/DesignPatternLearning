import { IObserver } from "./IObserver";
import { EventAggregator } from "./EventAggregator";
import { EventType } from "./EventType";

export class Participent1 extends EventAggregator implements IObserver {
    // public eventAgg: EventAggregator = new EventAggregator();
    constructor(){
        super();
        this.subscribe(EventType.OnSearchCompleted, this);
    }
    updateStatus() {
        this.publish(EventType.OnItemSelected, 'data');
    }
}