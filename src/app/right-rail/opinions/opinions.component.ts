import { Component, Input } from '@angular/core';
import { ItemArticleComponent } from '../item-article/item-article.component';
import { article } from '../article.model';

@Component({
  selector: 'app-opinions',
  standalone: true,
  imports: [ ItemArticleComponent ],
  templateUrl: './opinions.component.html',
  styleUrl: './opinions.component.css'
})
export class OpinionsComponent {
  @Input() opinion_1!: article;
  @Input() opinion_2!: article;
  @Input() opinion_3!: article;
  @Input() opinion_4!: article;

  @Input() posta!: article;
}
