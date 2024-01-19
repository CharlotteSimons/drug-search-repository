import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelMedicalConditionComponent } from './side-panel-medical-condition.component';

describe('SidePanelMedicalConditionComponent', () => {
  let component: SidePanelMedicalConditionComponent;
  let fixture: ComponentFixture<SidePanelMedicalConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidePanelMedicalConditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidePanelMedicalConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
