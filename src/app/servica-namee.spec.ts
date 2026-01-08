import { TestBed } from '@angular/core/testing';

import { ServicaNamee } from './servica-namee';

describe('ServincaNamee', () => {
  let service: ServicaNamee;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicaNamee);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
