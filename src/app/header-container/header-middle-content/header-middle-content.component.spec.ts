import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMiddleContentComponent } from './header-middle-content.component';

describe('HeaderMiddleContentComponent', () => {
  let component: HeaderMiddleContentComponent;
  let fixture: ComponentFixture<HeaderMiddleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMiddleContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderMiddleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
