import { Component, Input } from '@angular/core';
import { Article } from '../../article.model';

@Component({
  selector: 'app-article-fotina',
  standalone: true,
  imports: [],
  templateUrl: './article-fotina.component.html',
  styleUrl: './article-fotina.component.css'
})
export class ArticleFotinaComponent {
  @Input() article!: Article;
}
