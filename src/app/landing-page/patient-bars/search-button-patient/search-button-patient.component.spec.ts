import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchButtonPatientComponent } from './search-button-patient.component';

describe('SearchButtonPatientComponent', () => {
  let component: SearchButtonPatientComponent;
  let fixture: ComponentFixture<SearchButtonPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchButtonPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchButtonPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
