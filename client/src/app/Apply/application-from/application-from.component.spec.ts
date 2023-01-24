import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFromComponent } from './application-from.component';

describe('ApplicationFromComponent', () => {
  let component: ApplicationFromComponent;
  let fixture: ComponentFixture<ApplicationFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationFromComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
