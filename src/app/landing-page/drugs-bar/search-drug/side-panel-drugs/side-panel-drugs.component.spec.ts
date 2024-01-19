import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelDrugsComponent } from './side-panel-drugs.component';

describe('SidePanelDrugsComponent', () => {
  let component: SidePanelDrugsComponent;
  let fixture: ComponentFixture<SidePanelDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidePanelDrugsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidePanelDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
