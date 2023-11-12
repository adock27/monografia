import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeComponentsComponent } from './comparative-components.component';

describe('ComparativeComponentsComponent', () => {
  let component: ComparativeComponentsComponent;
  let fixture: ComponentFixture<ComparativeComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparativeComponentsComponent]
    });
    fixture = TestBed.createComponent(ComparativeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
