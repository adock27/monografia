import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTailsComponent } from './card-tails.component';

describe('CardTailsComponent', () => {
  let component: CardTailsComponent;
  let fixture: ComponentFixture<CardTailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTailsComponent]
    });
    fixture = TestBed.createComponent(CardTailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
