import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationTailsComponent } from './animation-tails.component';

describe('AnimationTailsComponent', () => {
  let component: AnimationTailsComponent;
  let fixture: ComponentFixture<AnimationTailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationTailsComponent]
    });
    fixture = TestBed.createComponent(AnimationTailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
