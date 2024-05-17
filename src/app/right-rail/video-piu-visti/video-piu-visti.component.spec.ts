import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPiuVistiComponent } from './video-piu-visti.component';

describe('VideoPiuVistiComponent', () => {
  let component: VideoPiuVistiComponent;
  let fixture: ComponentFixture<VideoPiuVistiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPiuVistiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoPiuVistiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
