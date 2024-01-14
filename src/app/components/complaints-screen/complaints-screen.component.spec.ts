import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsScreenComponent } from './complaints-screen.component';

describe('ComplaintsScreenComponent', () => {
  let component: ComplaintsScreenComponent;
  let fixture: ComponentFixture<ComplaintsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplaintsScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
