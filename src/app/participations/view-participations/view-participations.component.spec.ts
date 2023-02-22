import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParticipationsComponent } from './view-participations.component';

describe('ViewParticipationsComponent', () => {
  let component: ViewParticipationsComponent;
  let fixture: ComponentFixture<ViewParticipationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParticipationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewParticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
