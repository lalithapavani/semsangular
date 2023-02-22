import { TestBed } from '@angular/core/testing';

import { ParticipationsService } from './participations.service';

describe('ParticipationsService', () => {
  let service: ParticipationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
