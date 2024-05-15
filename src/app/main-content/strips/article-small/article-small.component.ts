import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-small',
  standalone: true,
  imports: [],
  templateUrl: './article-small.component.html',
  styleUrl: './article-small.component.css'
})
export class ArticleSmallComponent {
  @Input() imageUrl: string='';
  @Input() titleBlack: string='';
  @Input() titleRed: string='';
  @Input() signature: string='';
}
