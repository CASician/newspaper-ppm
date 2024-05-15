import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripComboComponent } from './strip-combo.component';

describe('StripComboComponent', () => {
  let component: StripComboComponent;
  let fixture: ComponentFixture<StripComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StripComboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StripComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
