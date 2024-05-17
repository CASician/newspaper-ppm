import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OroscopoComponent } from './oroscopo.component';

describe('OroscopoComponent', () => {
  let component: OroscopoComponent;
  let fixture: ComponentFixture<OroscopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OroscopoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OroscopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
