import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-del-giorno',
  standalone: true,
  imports: [],
  templateUrl: './video-del-giorno.component.html',
  styleUrl: './video-del-giorno.component.css'
})
export class VideoDelGiornoComponent {
  @Input() videoUrl!: string;
  @Input() description!: string;
}
