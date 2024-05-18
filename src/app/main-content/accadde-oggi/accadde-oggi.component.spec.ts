import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccaddeOggiComponent } from './accadde-oggi.component';

describe('AccaddeOggiComponent', () => {
  let component: AccaddeOggiComponent;
  let fixture: ComponentFixture<AccaddeOggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccaddeOggiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccaddeOggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
