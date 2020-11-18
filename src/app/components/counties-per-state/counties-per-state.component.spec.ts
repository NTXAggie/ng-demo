import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountiesPerStateComponent } from './counties-per-state.component';

describe('CountiesPerStateComponent', () => {
  let component: CountiesPerStateComponent;
  let fixture: ComponentFixture<CountiesPerStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountiesPerStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountiesPerStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
