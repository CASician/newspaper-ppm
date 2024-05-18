import { Component, Input } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-giorno-notte',
  standalone: true,
  imports: [],
  templateUrl: './giorno-notte.component.html',
  styleUrl: './giorno-notte.component.css'
})
export class GiornoNotteComponent {
  @Input() article!: Article;
}
