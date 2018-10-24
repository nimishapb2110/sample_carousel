import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionCarouselComponent } from './suggestion-carousel.component';

describe('SuggestionCarouselComponent', () => {
  let component: SuggestionCarouselComponent;
  let fixture: ComponentFixture<SuggestionCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
