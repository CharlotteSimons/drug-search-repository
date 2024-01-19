import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrugsBarComponent } from './drugs-bar.component';

describe('DrugsBarComponent', () => {
  let component: DrugsBarComponent;
  let fixture: ComponentFixture<DrugsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Voeg hier meer tests toe...
});
