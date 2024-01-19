import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNewSearchComponent } from './start-new-search.component';

describe('StartNewSearchComponent', () => {
  let component: StartNewSearchComponent;
  let fixture: ComponentFixture<StartNewSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartNewSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartNewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
