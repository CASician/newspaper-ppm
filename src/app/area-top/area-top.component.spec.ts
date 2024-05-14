import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTopComponent } from './area-top.component';

describe('AreaTopComponent', () => {
  let component: AreaTopComponent;
  let fixture: ComponentFixture<AreaTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
