import { Component, Input } from '@angular/core';
import { Article } from '../article.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-accadde-oggi',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './accadde-oggi.component.html',
  styleUrl: './accadde-oggi.component.css'
})
export class AccaddeOggiComponent {
  @Input() article_1!: Article;
  @Input() article_2!: Article;
  @Input() article_3!: Article;
}
