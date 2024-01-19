import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelDrugTargetComponent } from './side-panel-drug-target.component';

describe('SidePanelDrugTargetComponent', () => {
  let component: SidePanelDrugTargetComponent;
  let fixture: ComponentFixture<SidePanelDrugTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidePanelDrugTargetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidePanelDrugTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
