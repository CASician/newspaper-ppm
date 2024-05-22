import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDevicesComponent } from './small-devices.component';

describe('SmallDevicesComponent', () => {
  let component: SmallDevicesComponent;
  let fixture: ComponentFixture<SmallDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallDevicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
