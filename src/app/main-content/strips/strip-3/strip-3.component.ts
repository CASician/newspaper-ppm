import { Component, Input } from '@angular/core';
import { ArticleSmallComponent } from '../article-small/article-small.component';
import { Article } from '../../article.model';

@Component({
  selector: 'app-strip-3',
  standalone: true,
  imports: [ ArticleSmallComponent ],
  templateUrl: './strip-3.component.html',
  styleUrl: './strip-3.component.css'
})
export class Strip3Component {
  @Input() article_1!: Article;
  @Input() article_2!: Article;
  @Input() article_3!: Article;
}
