import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacokineticsComponent } from './pharmacokinetics.component';

describe('PharmacokineticsComponent', () => {
  let component: PharmacokineticsComponent;
  let fixture: ComponentFixture<PharmacokineticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PharmacokineticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PharmacokineticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
