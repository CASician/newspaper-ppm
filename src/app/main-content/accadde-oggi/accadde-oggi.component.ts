import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Article } from '../article.model';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accadde-oggi',
  standalone: true,
  imports: [
    NgbModule,
    CommonModule
  ],
  templateUrl: './accadde-oggi.component.html',
  styleUrl: './accadde-oggi.component.css'
})
export class AccaddeOggiComponent {
  @Input() article_1!: Article;
  @Input() article_2!: Article;
  @Input() article_3!: Article;
}
