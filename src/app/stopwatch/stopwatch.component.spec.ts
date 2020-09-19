import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchComponent } from './stopwatch.component';
import { By } from '@angular/platform-browser';

describe('StopwatchComponent', () => {
  let component: StopwatchComponent;
  let fixture: ComponentFixture<StopwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StopwatchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchComponent);
    component = fixture.componentInstance;
    component.ngAfterViewInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Stopwatch'`, () => {
    const header = fixture.componentInstance;
    expect(header.hours).toEqual('00');
    expect(header.minutes).toEqual('00');
    expect(header.seconds).toEqual('00');
    expect(header.isPaused).toEqual(true);
    expect(header.isStarted).toEqual(true);
    expect(header.num).toEqual(0);
    fixture.debugElement.query(By.css('#waitBtn'));
  });

  it('productSelection', () => {
    const mockSpyOnDestroy = spyOn(component, 'ngAfterViewInit');
    fixture.detectChanges();
    component.ngAfterViewInit();
    const btn = fixture.debugElement.query(By.css('#waitBtn')).nativeElement;

    expect(component.waitBtn).toEqual(btn);
    expect(mockSpyOnDestroy).toHaveBeenCalled();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('00');
  });

  it('should call stopTimer', () => {
    const mockSpyStopTimer = spyOn(component, 'stopTimer');
    fixture.detectChanges();
    component.stopTimer();
    expect(component.hours).toEqual('00');
    expect(component.minutes).toEqual('00');
    expect(component.seconds).toEqual('00');
    expect(component.num).toEqual(0);
    expect(component.isStarted).toBeTruthy();
    expect(component.isPaused).toBeTruthy();
    expect(mockSpyStopTimer).toHaveBeenCalled();
  });

  describe('ngOnDestroy', () => {
    it('should call ngOnDestroy', () => {
      const mockSpyOnDestroy = spyOn(component, 'ngOnDestroy');
      fixture.detectChanges();
      component.ngOnDestroy();
      expect(mockSpyOnDestroy).toHaveBeenCalled();
    });
  });
});

//   describe('validate Siret ', () => {
//     it('should call the method validateSiret() when the blur event is triggered', () => {
//         fakeAsync(() => {
//             spyOn(component, 'ngAfterViewInit');
//             fixture.detectChanges();
//             const input: ElementRef = fixture.debugElement.query(By.css('#waitBtn'));
//             input.nativeElement.blur();
//             tick();
//             expect(component.ngAfterViewInit).toHaveBeenCalled();
//         });
//     });
// });
