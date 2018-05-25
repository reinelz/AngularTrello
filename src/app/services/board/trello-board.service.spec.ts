import { TestBed, inject } from '@angular/core/testing';

import { TrelloBoardService } from './trello-board.service';

describe('TrelloBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrelloBoardService]
    });
  });

  it('should be created', inject([TrelloBoardService], (service: TrelloBoardService) => {
    expect(service).toBeTruthy();
  }));
});
