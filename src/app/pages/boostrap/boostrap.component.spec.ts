import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapComponent } from './boostrap.component';

describe('BoostrapComponent', () => {
  let component: BoostrapComponent;
  let fixture: ComponentFixture<BoostrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoostrapComponent]
    });
    fixture = TestBed.createComponent(BoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
