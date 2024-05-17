import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaBottomComponent } from './area-bottom.component';

describe('AreaBottomComponent', () => {
  let component: AreaBottomComponent;
  let fixture: ComponentFixture<AreaBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
