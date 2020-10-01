import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { ListadoDeHeroesComponent } from './listado-de-heroes.component';
import { HeroesService } from '../services/heroes.service';

describe('ListadoDeHeroesComponent', () => {
  let component: ListadoDeHeroesComponent;
  let fixture: ComponentFixture<ListadoDeHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDeHeroesComponent ],
      imports: [
        HttpClientModule],
      providers: [
        HeroesService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
