import { Component, Input } from '@angular/core';
import { article } from '../article.model';

@Component({
  selector: 'app-notizie-piu-lette',
  standalone: true,
  imports: [],
  templateUrl: './notizie-piu-lette.component.html',
  styleUrl: './notizie-piu-lette.component.css'
})
export class NotiziePiuLetteComponent {
  @Input() article_1!: article;
  @Input() article_2!: article;
  @Input() article_3!: article;
  @Input() article_4!: article;
  @Input() article_5!: article;
}
