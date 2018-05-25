import { TestBed, inject } from '@angular/core/testing';

import { DateCalcService } from './date-calc.service';

fdescribe('DateCalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateCalcService]
    });
  });

  it('should calcualte for today = 0', inject([DateCalcService], (service: DateCalcService) => {
    const diff = service.getTimeDiff(new Date());

    expect(diff).toBe(1);
  }));
});
