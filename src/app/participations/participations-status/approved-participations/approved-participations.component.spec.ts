import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedParticipationsComponent } from './approved-participations.component';

describe('ApprovedParticipationsComponent', () => {
  let component: ApprovedParticipationsComponent;
  let fixture: ComponentFixture<ApprovedParticipationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedParticipationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedParticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
