import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, buffer, filter, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DblclickService<T> {
  click$: Observable<T>;
  doubleClicks$;

  constructor() {}

  detectDblclick(el) {
    this.click$ = fromEvent(el, 'click');

    return (this.doubleClicks$ = this.click$.pipe(
      buffer(this.click$.pipe(debounceTime(300))),
      map(clicks => clicks.length),
      filter(clicksLength => clicksLength >= 2),
    ));
  }
}
