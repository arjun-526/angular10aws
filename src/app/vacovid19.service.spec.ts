import { TestBed } from '@angular/core/testing';

import { Vacovid19Service } from './vacovid19.service';

describe('Vacovid19Service', () => {
  let service: Vacovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vacovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
