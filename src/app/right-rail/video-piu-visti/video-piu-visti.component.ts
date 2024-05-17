import { Component, Input } from '@angular/core';
import { ItemArticleComponent } from '../item-article/item-article.component';
import { article } from '../article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-piu-visti',
  standalone: true,
  imports: [ ItemArticleComponent, CommonModule ],
  templateUrl: './video-piu-visti.component.html',
  styleUrl: './video-piu-visti.component.css'
})
export class VideoPiuVistiComponent {
  @Input() video_1!: article;
  @Input() video_2!: article;
  @Input() video_3!: article;
  @Input() video_4!: article;
  @Input() video_5!: article;
}
