import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesByPopComponent } from './cities-by-pop.component';

describe('CitiesByPopComponent', () => {
  let component: CitiesByPopComponent;
  let fixture: ComponentFixture<CitiesByPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesByPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesByPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
