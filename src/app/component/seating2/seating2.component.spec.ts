import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seating2Component } from './seating2.component';

describe('Seating2Component', () => {
  let component: Seating2Component;
  let fixture: ComponentFixture<Seating2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seating2Component]
    });
    fixture = TestBed.createComponent(Seating2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
