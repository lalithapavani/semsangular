import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingParticipationsComponent } from './pending-participations.component';

describe('PendingParticipationsComponent', () => {
  let component: PendingParticipationsComponent;
  let fixture: ComponentFixture<PendingParticipationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingParticipationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingParticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
