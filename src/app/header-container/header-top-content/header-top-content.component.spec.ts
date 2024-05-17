import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopContentComponent } from './header-top-content.component';

describe('HeaderTopContentComponent', () => {
  let component: HeaderTopContentComponent;
  let fixture: ComponentFixture<HeaderTopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTopContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
