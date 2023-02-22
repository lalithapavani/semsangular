import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventByNameComponent } from './view-event-by-name.component';

describe('ViewEventByNameComponent', () => {
  let component: ViewEventByNameComponent;
  let fixture: ComponentFixture<ViewEventByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEventByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEventByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
