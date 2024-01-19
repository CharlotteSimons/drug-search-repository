import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstanceInformationComponent } from './substance-information.component';

describe('SubstanceInformationComponent', () => {
  let component: SubstanceInformationComponent;
  let fixture: ComponentFixture<SubstanceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubstanceInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubstanceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
