import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { article } from '../article.model';

@Component({
  selector: 'app-item-article',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './item-article.component.html',
  styleUrl: './item-article.component.css'
})
export class ItemArticleComponent {
  @Input() article!: article;

  @Input() isImageRx: boolean=false;
}
