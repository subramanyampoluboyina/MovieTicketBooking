import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seating1Component } from './seating1.component';

describe('Seating1Component', () => {
  let component: Seating1Component;
  let fixture: ComponentFixture<Seating1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seating1Component]
    });
    fixture = TestBed.createComponent(Seating1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
