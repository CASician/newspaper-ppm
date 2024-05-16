import { Component, Input } from '@angular/core';
import { article } from '../article.model';
import { ItemArticleComponent } from '../item-article/item-article.component';

@Component({
  selector: 'app-my-play',
  standalone: true,
  imports: [ ItemArticleComponent ],
  templateUrl: './my-play.component.html',
  styleUrl: './my-play.component.css'
})
export class MyPlayComponent {
  @Input() article_1!: article;
  @Input() article_2!: article;
  @Input() article_3!: article;
}
