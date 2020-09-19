import { TestBed } from '@angular/core/testing';
import { TimerService } from './timer.service';
// import { Observable } from 'rxjs/Observable';

describe('TimerService', () => {
  let service: TimerService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
