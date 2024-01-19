import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBarsComponent } from './patient-bars.component';

describe('PatientBarsComponent', () => {
  let component: PatientBarsComponent;
  let fixture: ComponentFixture<PatientBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientBarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
