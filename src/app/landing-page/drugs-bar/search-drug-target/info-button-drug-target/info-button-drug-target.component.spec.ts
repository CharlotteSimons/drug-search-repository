import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoButtonDrugTargetComponent } from './info-button-drug-target.component';

describe('InfoButtonDrugTargetComponent', () => {
  let component: InfoButtonDrugTargetComponent;
  let fixture: ComponentFixture<InfoButtonDrugTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoButtonDrugTargetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoButtonDrugTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
