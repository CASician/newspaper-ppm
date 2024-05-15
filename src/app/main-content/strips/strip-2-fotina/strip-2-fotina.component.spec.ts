import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strip2FotinaComponent } from './strip-2-fotina.component';

describe('Strip2FotinaComponent', () => {
  let component: Strip2FotinaComponent;
  let fixture: ComponentFixture<Strip2FotinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Strip2FotinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Strip2FotinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
