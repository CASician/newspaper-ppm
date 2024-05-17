import { Component, Input } from '@angular/core';
import { Article } from '../../main-content/article.model';

@Component({
  selector: 'app-big-strip-3',
  standalone: true,
  imports: [],
  templateUrl: './big-strip-3.component.html',
  styleUrl: './big-strip-3.component.css'
})
export class BigStrip3Component {
  @Input() category!: string;

  @Input() article_1!: Article;
  @Input() article_2!: Article;
  @Input() article_3!: Article;
  @Input() article_4!: Article;
}
