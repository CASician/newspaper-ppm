import { Component, Input } from '@angular/core';
import { Article } from '../../article.model';
import { ArticleSmallComponent } from '../article-small/article-small.component';

@Component({
  selector: 'app-strip-2',
  standalone: true,
  imports: [ ArticleSmallComponent ],
  templateUrl: './strip-2.component.html',
  styleUrl: './strip-2.component.css'
})
export class Strip2Component {
  @Input() article_1!: Article;
  @Input() article_2!: Article;
}
