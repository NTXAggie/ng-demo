import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface LoaderState {
  show: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();
  public $loaderSub = this.loaderSubject.asObservable();

  constructor() { }

  public startLoading(): void {
    this.loaderSubject.next({show: true});
  }
  public endLoading(): void {
    this.loaderSubject.next({show: false});
  }
}
