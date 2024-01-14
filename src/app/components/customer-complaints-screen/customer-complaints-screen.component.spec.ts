import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComplaintsScreenComponent } from './customer-complaints-screen.component';

describe('CustomerComplaintsScreenComponent', () => {
  let component: CustomerComplaintsScreenComponent;
  let fixture: ComponentFixture<CustomerComplaintsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerComplaintsScreenComponent]
    });
    fixture = TestBed.createComponent(CustomerComplaintsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
