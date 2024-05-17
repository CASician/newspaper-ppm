import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigStrip4Component } from './big-strip-4.component';

describe('BigStrip4Component', () => {
  let component: BigStrip4Component;
  let fixture: ComponentFixture<BigStrip4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigStrip4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigStrip4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
