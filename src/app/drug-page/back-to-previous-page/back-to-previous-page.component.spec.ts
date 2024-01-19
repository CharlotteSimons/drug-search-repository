import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToPreviousPageComponent } from './back-to-previous-page.component';

describe('BackToPreviousPageComponent', () => {
  let component: BackToPreviousPageComponent;
  let fixture: ComponentFixture<BackToPreviousPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackToPreviousPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackToPreviousPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
