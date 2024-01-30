import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarDrugsComponent } from './similar-drugs.component';

describe('SimilarDrugsComponent', () => {
  let component: SimilarDrugsComponent;
  let fixture: ComponentFixture<SimilarDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimilarDrugsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimilarDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
