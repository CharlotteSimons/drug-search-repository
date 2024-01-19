import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugPageComponent } from './drug-page.component';

describe('DrugPageComponent', () => {
  let component: DrugPageComponent;
  let fixture: ComponentFixture<DrugPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrugPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrugPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
