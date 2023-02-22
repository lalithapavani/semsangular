import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParticipationsComponent } from './edit-participations.component';

describe('EditParticipationsComponent', () => {
  let component: EditParticipationsComponent;
  let fixture: ComponentFixture<EditParticipationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParticipationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
