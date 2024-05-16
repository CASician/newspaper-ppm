import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-article',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './item-article.component.html',
  styleUrl: './item-article.component.css'
})
export class ItemArticleComponent {
  @Input() category: string='';
  @Input() text: string='';
  @Input() signature: string='';
  @Input() imgUrl: string='';
  @Input() isVideo: boolean=false;
  @Input() isImageRx: boolean=false;
}
