import { Injectable } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';
import { map, takeUntil, repeatWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TimerService<T> {

  observable$: Observable<T>;
  private _stop = new Subject<void>();
  private _start = new Subject<void>();

  constructor() {
    this.observable$ = timer(0, 1000)
      .pipe(
        map(() => <T>{}),
        takeUntil(this._stop),
        repeatWhen(() => this._start),
      );
  }

  start(): void {
    this._start.next();
  }

  stop(): void {
    this._stop.next();
  }
}
