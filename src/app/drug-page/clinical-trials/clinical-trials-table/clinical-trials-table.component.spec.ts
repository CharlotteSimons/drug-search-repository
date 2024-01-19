import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalTrialsTableComponent } from './clinical-trials-table.component';

describe('ClinicalTrialsTableComponent', () => {
  let component: ClinicalTrialsTableComponent;
  let fixture: ComponentFixture<ClinicalTrialsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClinicalTrialsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicalTrialsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
