import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaHeroesComponent } from './alta-heroes.component';

describe('AltaHeroesComponent', () => {
  let component: AltaHeroesComponent;
  let fixture: ComponentFixture<AltaHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
