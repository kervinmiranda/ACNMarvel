import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroesService } from '../services/heroes.service';
import { ModalPollComponent } from '../modal-poll/modal-poll.component';

describe('HeroProfileComponent', () => {
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroProfileComponent],
      imports:[HttpClientModule, RouterTestingModule],
      providers: [HeroesService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
