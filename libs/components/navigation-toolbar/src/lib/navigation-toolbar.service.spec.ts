import { TestBed } from '@angular/core/testing';

import { NavigationToolbarService } from './navigation-toolbar.service';

describe('NavigationToolbarService', () => {
  let service: NavigationToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
