import { TestBed } from '@angular/core/testing';

import { ShareSavedQuotesService } from './share-saved-quotes.service';

describe('ShareSavedQuotesService', () => {
  let service: ShareSavedQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareSavedQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
