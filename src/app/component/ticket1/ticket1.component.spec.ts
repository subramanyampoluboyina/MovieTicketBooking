import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ticket1Component } from './ticket1.component';

describe('Ticket1Component', () => {
  let component: Ticket1Component;
  let fixture: ComponentFixture<Ticket1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ticket1Component]
    });
    fixture = TestBed.createComponent(Ticket1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
