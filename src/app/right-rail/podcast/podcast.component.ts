import { Component, Input } from '@angular/core';
import { article } from '../article.model';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent {
  @Input() podcast_1!: article;
  @Input() podcast_2!: article;
}
