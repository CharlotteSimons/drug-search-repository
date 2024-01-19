import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoButtonMedicalConditionComponent } from './info-button-medical-condition.component';

describe('InfoButtonMedicalConditionComponent', () => {
  let component: InfoButtonMedicalConditionComponent;
  let fixture: ComponentFixture<InfoButtonMedicalConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoButtonMedicalConditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoButtonMedicalConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
