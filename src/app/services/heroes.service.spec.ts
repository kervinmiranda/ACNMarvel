import { TestBed } from '@angular/core/testing';

import { HeroesService } from './heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
