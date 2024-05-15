import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strip1RightComponent } from './strip-1-right.component';

describe('Strip1RightComponent', () => {
  let component: Strip1RightComponent;
  let fixture: ComponentFixture<Strip1RightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Strip1RightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Strip1RightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
