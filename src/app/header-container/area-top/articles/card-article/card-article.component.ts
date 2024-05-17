import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.css'
})
export class CardArticleComponent {
  @Input() imageUrl: string='';
  @Input() title: string='';
  @Input() titleContent: string='';
  @Input() signature: string='';
}
