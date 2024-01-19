import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugTitleComponent } from './drug-title.component';

describe('DrugTitleComponent', () => {
  let component: DrugTitleComponent;
  let fixture: ComponentFixture<DrugTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrugTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrugTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
