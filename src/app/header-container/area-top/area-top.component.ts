import { Component } from '@angular/core';
import { CardArticleComponent } from './articles/card-article/card-article.component';

@Component({
  selector: 'app-area-top',
  standalone: true,
  imports: [
    CardArticleComponent,
  ],
  templateUrl: './area-top.component.html',
  styleUrl: './area-top.component.css'
})
export class AreaTopComponent {

}
