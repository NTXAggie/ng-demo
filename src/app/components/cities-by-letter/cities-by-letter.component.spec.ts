import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesByLetterComponent } from './cities-by-letter.component';

describe('CitiesByLetterComponent', () => {
  let component: CitiesByLetterComponent;
  let fixture: ComponentFixture<CitiesByLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesByLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesByLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
