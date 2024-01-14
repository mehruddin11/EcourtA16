import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseHistoryScreenComponent } from './case-history-screen.component';

describe('CaseHistoryScreenComponent', () => {
  let component: CaseHistoryScreenComponent;
  let fixture: ComponentFixture<CaseHistoryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseHistoryScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseHistoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
