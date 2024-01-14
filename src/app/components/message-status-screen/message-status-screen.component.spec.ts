import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStatusScreenComponent } from './message-status-screen.component';

describe('MessageStatusScreenComponent', () => {
  let component: MessageStatusScreenComponent;
  let fixture: ComponentFixture<MessageStatusScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageStatusScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageStatusScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
