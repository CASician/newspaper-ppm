import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strip3Component } from './strip-3.component';

describe('Strip3Component', () => {
  let component: Strip3Component;
  let fixture: ComponentFixture<Strip3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Strip3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Strip3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
