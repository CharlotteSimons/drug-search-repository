import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedAccesProgramsComponent } from './expanded-acces-programs.component';

describe('ExpandedAccesProgramsComponent', () => {
  let component: ExpandedAccesProgramsComponent;
  let fixture: ComponentFixture<ExpandedAccesProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandedAccesProgramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandedAccesProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
