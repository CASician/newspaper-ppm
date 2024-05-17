import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiziePiuLetteComponent } from './notizie-piu-lette.component';

describe('NotiziePiuLetteComponent', () => {
  let component: NotiziePiuLetteComponent;
  let fixture: ComponentFixture<NotiziePiuLetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotiziePiuLetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotiziePiuLetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
