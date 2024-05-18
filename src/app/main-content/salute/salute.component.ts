import { Component, Input } from '@angular/core';
import { Article } from '../article.model';
import { Strip2Component } from '../strips/strip-2/strip-2.component';

@Component({
  selector: 'app-salute',
  standalone: true,
  imports: [ Strip2Component ],
  templateUrl: './salute.component.html',
  styleUrl: './salute.component.css'
})
export class SaluteComponent {
  @Input() article_1!: Article;
  @Input() article_2!: Article;
  @Input() article_3!: Article;
}
