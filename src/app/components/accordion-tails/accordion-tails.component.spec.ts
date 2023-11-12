import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTailsComponent } from './accordion-tails.component';

describe('AccordionTailsComponent', () => {
  let component: AccordionTailsComponent;
  let fixture: ComponentFixture<AccordionTailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionTailsComponent]
    });
    fixture = TestBed.createComponent(AccordionTailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
