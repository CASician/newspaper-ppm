import { Component, Input } from '@angular/core';
import { Article } from '../../article.model';
import { ArticleFotinaComponent } from '../article-fotina/article-fotina.component';

@Component({
  selector: 'app-strip-2-fotina',
  standalone: true,
  imports: [ ArticleFotinaComponent ],
  templateUrl: './strip-2-fotina.component.html',
  styleUrl: './strip-2-fotina.component.css'
})
export class Strip2FotinaComponent {
  @Input() article_1!: Article;
  @Input() article_2!: Article;
}
