import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSportsComponent } from './view-sports.component';

describe('ViewSportsComponent', () => {
  let component: ViewSportsComponent;
  let fixture: ComponentFixture<ViewSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
