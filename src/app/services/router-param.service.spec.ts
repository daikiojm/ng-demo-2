import { TestBed, inject } from '@angular/core/testing';

import { RouterParamService } from './router-param.service';

describe('RouterParamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterParamService]
    });
  });

  it('should be created', inject([RouterParamService], (service: RouterParamService) => {
    expect(service).toBeTruthy();
  }));
});
