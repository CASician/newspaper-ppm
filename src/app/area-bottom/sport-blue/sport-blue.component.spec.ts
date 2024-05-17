import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBlueComponent } from './sport-blue.component';

describe('SportBlueComponent', () => {
  let component: SportBlueComponent;
  let fixture: ComponentFixture<SportBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportBlueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
