import { TestBed } from '@angular/core/testing';

import { AddBayService } from './add-bay.service';

describe('AddBayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddBayService = TestBed.get(AddBayService);
    expect(service).toBeTruthy();
  });
});
