import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedicalConditionComponent } from './search-medical-condition.component';

describe('SearchMedicalConditionComponent', () => {
  let component: SearchMedicalConditionComponent;
  let fixture: ComponentFixture<SearchMedicalConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchMedicalConditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchMedicalConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
