import { Component, Input } from '@angular/core';
import { Article } from '../../article.model';

@Component({
  selector: 'app-article-small',
  standalone: true,
  imports: [],
  templateUrl: './article-small.component.html',
  styleUrl: './article-small.component.css'
})
export class ArticleSmallComponent {
  @Input() article! : Article;
}
