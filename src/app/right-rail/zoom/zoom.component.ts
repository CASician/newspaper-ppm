import { Component, Input } from '@angular/core';
import { ItemArticleComponent } from '../item-article/item-article.component';
import { article } from '../article.model';

@Component({
  selector: 'app-zoom',
  standalone: true,
  imports: [
    ItemArticleComponent
  ],
  templateUrl: './zoom.component.html',
  styleUrl: './zoom.component.css'
})
export class ZoomComponent {
  @Input() article_1!: article;
  @Input() article_2!: article;
  @Input() article_3!: article;
  @Input() article_4!: article;
  @Input() article_5!: article;
  @Input() article_6!: article;
  @Input() article_7!: article;
  @Input() article_8!: article;
  @Input() article_9!: article;
  @Input() article_10!: article;
  @Input() article_11!: article;
  @Input() article_12!: article;
}
