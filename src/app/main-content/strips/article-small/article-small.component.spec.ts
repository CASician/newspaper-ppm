import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSmallComponent } from './article-small.component';

describe('ArticleSmallComponent', () => {
  let component: ArticleSmallComponent;
  let fixture: ComponentFixture<ArticleSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
