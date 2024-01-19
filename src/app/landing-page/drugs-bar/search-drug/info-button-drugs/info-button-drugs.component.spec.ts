import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoButtonDrugsComponent } from './info-button-drugs.component';

describe('InfoButtonDrugsComponent', () => {
  let component: InfoButtonDrugsComponent;
  let fixture: ComponentFixture<InfoButtonDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoButtonDrugsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoButtonDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
