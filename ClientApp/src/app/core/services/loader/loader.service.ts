import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from '../../models/loader';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();
  public loaderState = this.loaderSubject.asObservable();
  
  constructor() { /* constructor code will go here */ }

  show() {
    this.loaderSubject.next({ show: true } as LoaderState);
  }

  hide() {
    this.loaderSubject.next({ show: false } as LoaderState);
  }

}
