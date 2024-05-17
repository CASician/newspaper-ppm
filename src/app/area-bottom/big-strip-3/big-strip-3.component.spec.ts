import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigStrip3Component } from './big-strip-3.component';

describe('BigStrip3Component', () => {
  let component: BigStrip3Component;
  let fixture: ComponentFixture<BigStrip3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigStrip3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigStrip3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
