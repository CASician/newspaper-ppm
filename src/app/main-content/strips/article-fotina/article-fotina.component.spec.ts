import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFotinaComponent } from './article-fotina.component';

describe('ArticleFotinaComponent', () => {
  let component: ArticleFotinaComponent;
  let fixture: ComponentFixture<ArticleFotinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleFotinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleFotinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
