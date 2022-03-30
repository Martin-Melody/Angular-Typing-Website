import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySavedQuotesComponent } from './display-saved-quotes.component';

describe('DisplaySavedQuotesComponent', () => {
  let component: DisplaySavedQuotesComponent;
  let fixture: ComponentFixture<DisplaySavedQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySavedQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySavedQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
