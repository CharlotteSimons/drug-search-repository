import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalTrialsComponent } from './clinical-trials.component';

describe('ClinicalTrialsComponent', () => {
  let component: ClinicalTrialsComponent;
  let fixture: ComponentFixture<ClinicalTrialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClinicalTrialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicalTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
