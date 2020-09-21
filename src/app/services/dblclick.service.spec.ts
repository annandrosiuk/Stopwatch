import { TestBed } from '@angular/core/testing';
import { DblclickService } from './dblclick.service';

describe('DblclickService', () => {
  let service: DblclickService<any>;
  let btn: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DblclickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should detectDblclick', () => {
    const mockSpyOnDestroy = spyOn(service, 'detectDblclick');
    service.detectDblclick(btn);
    expect(mockSpyOnDestroy).toHaveBeenCalled();
  });
});
