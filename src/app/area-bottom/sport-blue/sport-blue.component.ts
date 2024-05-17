import { Component, Input } from '@angular/core';
import { Article } from '../../main-content/article.model';

@Component({
  selector: 'app-sport-blue',
  standalone: true,
  imports: [],
  templateUrl: './sport-blue.component.html',
  styleUrl: './sport-blue.component.css'
})
export class SportBlueComponent {
  @Input() article_1!: Article;
  @Input() article_2!: Article;
  @Input() article_3!: Article;
  @Input() article_4!: Article;
}
