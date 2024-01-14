import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileModificationScreenComponent } from './profile-modification-screen.component';

describe('ProfileModificationScreenComponent', () => {
  let component: ProfileModificationScreenComponent;
  let fixture: ComponentFixture<ProfileModificationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileModificationScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileModificationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
