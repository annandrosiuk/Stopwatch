import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent implements OnInit, OnDestroy {
  hours = '00';
  minutes = '00';
  seconds = '00';
  isPaused = true;
  isStarted = true;
  num = 0;
  timer;

  constructor(private timerService: TimerService<any>) {}

  ngOnInit() {}

  startTimer() {
    this.isStarted = false;
    this.timer = this.timerService.observable$.subscribe(() => {
      this.num += 1;
      this.hours = Math.floor(this.num / 3600).toString();
      this.minutes = Math.floor((this.num % 3600) / 60).toString();
      this.seconds = Math.floor((this.num % 3600) % 60).toString();

      if (Number(this.seconds) < 10) {
        this.seconds = `0${this.seconds}`;
      } else {
        this.seconds = `${this.seconds}`;
      }

      if (Number(this.minutes) < 10) {
        this.minutes = `0${this.minutes}`;
      } else {
        this.minutes = `${this.minutes}`;
      }

      if (Number(this.hours) < 10) {
        this.hours = `0${this.hours}`;
      } else {
        this.hours = `${this.hours}`;
      }
    });
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }
}