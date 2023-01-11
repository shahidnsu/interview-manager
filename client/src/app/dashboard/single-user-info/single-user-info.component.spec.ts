import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserInfoComponent } from './single-user-info.component';

describe('SingleUserInfoComponent', () => {
  let component: SingleUserInfoComponent;
  let fixture: ComponentFixture<SingleUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUserInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
