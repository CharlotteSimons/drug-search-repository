import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchButtonEapComponent } from './search-button-eap.component';

describe('SearchButtonEapComponent', () => {
  let component: SearchButtonEapComponent;
  let fixture: ComponentFixture<SearchButtonEapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchButtonEapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchButtonEapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
