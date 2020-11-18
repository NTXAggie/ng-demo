import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountiesByLetterComponent } from './counties-by-letter.component';

describe('CountiesByLetterComponent', () => {
  let component: CountiesByLetterComponent;
  let fixture: ComponentFixture<CountiesByLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountiesByLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountiesByLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
