import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTailsComponent } from './form-tails.component';

describe('FormTailsComponent', () => {
  let component: FormTailsComponent;
  let fixture: ComponentFixture<FormTailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTailsComponent]
    });
    fixture = TestBed.createComponent(FormTailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
