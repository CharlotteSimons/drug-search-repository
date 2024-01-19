import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSafetyComponent } from './extra-safety.component';

describe('ExtraSafetyComponent', () => {
  let component: ExtraSafetyComponent;
  let fixture: ComponentFixture<ExtraSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtraSafetyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtraSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
