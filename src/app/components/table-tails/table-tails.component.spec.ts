import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTailsComponent } from './table-tails.component';

describe('TableTailsComponent', () => {
  let component: TableTailsComponent;
  let fixture: ComponentFixture<TableTailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableTailsComponent]
    });
    fixture = TestBed.createComponent(TableTailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
