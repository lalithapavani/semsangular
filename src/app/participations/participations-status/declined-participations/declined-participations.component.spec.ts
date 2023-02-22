import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedParticipationsComponent } from './declined-participations.component';

describe('DeclinedParticipationsComponent', () => {
  let component: DeclinedParticipationsComponent;
  let fixture: ComponentFixture<DeclinedParticipationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclinedParticipationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclinedParticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
