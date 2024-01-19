import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahComponent } from './mah.component';

describe('MahComponent', () => {
  let component: MahComponent;
  let fixture: ComponentFixture<MahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
