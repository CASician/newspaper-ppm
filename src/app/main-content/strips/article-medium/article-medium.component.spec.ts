import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMediumComponent } from './article-medium.component';

describe('ArticleMediumComponent', () => {
  let component: ArticleMediumComponent;
  let fixture: ComponentFixture<ArticleMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleMediumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
