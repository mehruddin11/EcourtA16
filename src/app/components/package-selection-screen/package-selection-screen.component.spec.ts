import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSelectionScreenComponent } from './package-selection-screen.component';

describe('PackageSelectionScreenComponent', () => {
  let component: PackageSelectionScreenComponent;
  let fixture: ComponentFixture<PackageSelectionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackageSelectionScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackageSelectionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
