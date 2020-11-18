import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStartingLetterComponent } from './chart-starting-letter.component';

describe('ChartStartingLetterComponent', () => {
  let component: ChartStartingLetterComponent;
  let fixture: ComponentFixture<ChartStartingLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStartingLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStartingLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
