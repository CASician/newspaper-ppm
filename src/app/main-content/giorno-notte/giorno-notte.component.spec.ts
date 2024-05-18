import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornoNotteComponent } from './giorno-notte.component';

describe('GiornoNotteComponent', () => {
  let component: GiornoNotteComponent;
  let fixture: ComponentFixture<GiornoNotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiornoNotteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiornoNotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
