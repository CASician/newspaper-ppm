import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaluteComponent } from './salute.component';

describe('SaluteComponent', () => {
  let component: SaluteComponent;
  let fixture: ComponentFixture<SaluteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaluteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
