import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSportByNameComponent } from './view-sport-by-name.component';

describe('ViewSportByNameComponent', () => {
  let component: ViewSportByNameComponent;
  let fixture: ComponentFixture<ViewSportByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSportByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSportByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
