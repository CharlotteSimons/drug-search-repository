import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDrugTargetComponent } from './search-drug-target.component';

describe('SearchDrugTargetComponent', () => {
  let component: SearchDrugTargetComponent;
  let fixture: ComponentFixture<SearchDrugTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchDrugTargetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchDrugTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
