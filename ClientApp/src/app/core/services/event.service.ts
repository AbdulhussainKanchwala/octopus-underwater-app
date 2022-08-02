import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LayoutEventType } from '../constants/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private handler = new Subject<any>();
  constructor () { /* constructor code will go here */ }

  /**
   * Broadcast the event
   * @param type type of event
   * @param payload payload
   */
  broadcast(type: LayoutEventType, payload: any = ""): void {
    this.handler.next({ type, payload });
  }

  /**
   * Subscribe to event
   * @param eventType type of event
   */
  on(eventType: LayoutEventType): Observable<any> {
    return this.handler.pipe(filter(event => event.type === eventType));
  }
}
