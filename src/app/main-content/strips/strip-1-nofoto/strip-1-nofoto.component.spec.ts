import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strip1NofotoComponent } from './strip-1-nofoto.component';

describe('Strip1NofotoComponent', () => {
  let component: Strip1NofotoComponent;
  let fixture: ComponentFixture<Strip1NofotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Strip1NofotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Strip1NofotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
