import { Component, Input } from '@angular/core';
import { Article } from '../../main-content/article.model';

@Component({
  selector: 'app-small-devices-article',
  standalone: true,
  imports: [],
  templateUrl: './small-devices-article.component.html',
  styleUrl: './small-devices-article.component.css'
})
export class SmallDevicesArticleComponent {
  @Input() article!: Article;
}
