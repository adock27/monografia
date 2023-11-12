import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTailsComponent } from './button-tails.component';

describe('ButtonTailsComponent', () => {
  let component: ButtonTailsComponent;
  let fixture: ComponentFixture<ButtonTailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTailsComponent]
    });
    fixture = TestBed.createComponent(ButtonTailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
