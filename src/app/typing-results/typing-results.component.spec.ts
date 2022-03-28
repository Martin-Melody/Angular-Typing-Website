import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingResultsComponent } from './typing-results.component';

describe('TypingResultsComponent', () => {
  let component: TypingResultsComponent;
  let fixture: ComponentFixture<TypingResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
