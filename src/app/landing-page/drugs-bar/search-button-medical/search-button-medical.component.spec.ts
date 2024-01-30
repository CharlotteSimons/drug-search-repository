import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchButtonMedicalComponent } from './search-button-medical.component';

describe('SearchButtonMedicalComponent', () => {
  let component: SearchButtonMedicalComponent;
  let fixture: ComponentFixture<SearchButtonMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchButtonMedicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchButtonMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
