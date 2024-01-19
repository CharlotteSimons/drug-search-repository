import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchButtonDrugsComponent } from './search-button-drugs.component';

describe('SearchButtonDrugsComponent', () => {
  let component: SearchButtonDrugsComponent;
  let fixture: ComponentFixture<SearchButtonDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchButtonDrugsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchButtonDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
