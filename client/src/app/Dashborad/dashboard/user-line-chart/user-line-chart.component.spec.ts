import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLineChartComponent } from './user-line-chart.component';

describe('UserLineChartComponent', () => {
  let component: UserLineChartComponent;
  let fixture: ComponentFixture<UserLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
