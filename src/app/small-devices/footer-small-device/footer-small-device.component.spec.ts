import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSmallDeviceComponent } from './footer-small-device.component';

describe('FooterSmallDeviceComponent', () => {
  let component: FooterSmallDeviceComponent;
  let fixture: ComponentFixture<FooterSmallDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSmallDeviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSmallDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
