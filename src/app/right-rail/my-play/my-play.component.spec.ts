import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlayComponent } from './my-play.component';

describe('MyPlayComponent', () => {
  let component: MyPlayComponent;
  let fixture: ComponentFixture<MyPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
