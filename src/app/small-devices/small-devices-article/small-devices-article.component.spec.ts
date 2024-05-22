import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDevicesArticleComponent } from './small-devices-article.component';

describe('SmallDevicesArticleComponent', () => {
  let component: SmallDevicesArticleComponent;
  let fixture: ComponentFixture<SmallDevicesArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallDevicesArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallDevicesArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
