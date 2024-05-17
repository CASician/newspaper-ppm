import { Component, Input } from '@angular/core';
import { article } from '../article.model';

@Component({
  selector: 'app-oroscopo',
  standalone: true,
  imports: [],
  templateUrl: './oroscopo.component.html',
  styleUrl: './oroscopo.component.css'
})
export class OroscopoComponent {
  @Input() segno!: article;
}
