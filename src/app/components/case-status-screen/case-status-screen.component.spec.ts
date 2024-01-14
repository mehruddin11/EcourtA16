import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStatusScreenComponent } from './case-status-screen.component';

describe('CaseStatusScreenComponent', () => {
  let component: CaseStatusScreenComponent;
  let fixture: ComponentFixture<CaseStatusScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStatusScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseStatusScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
