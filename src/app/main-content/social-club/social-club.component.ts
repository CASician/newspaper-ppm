import { Component, Input } from '@angular/core';
import { Article } from '../article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-club',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './social-club.component.html',
  styleUrl: './social-club.component.css'
})
export class SocialClubComponent {
  @Input() article_1!: Article;
  @Input() social_1!: string;
  @Input() clr_social_1!: string;

  @Input() article_2!: Article;
  @Input() social_2!: string;
  @Input() clr_social_2!: string;

  @Input() article_3!: Article;
  @Input() social_3!: string;
  @Input() clr_social_3!: string;

  getIconClass(brand: string) {
    switch (brand) {
      case 'facebook':
        return 'fab fa-facebook-f'; // Classe FontAwesome per Facebook
      case 'tiktok':
        return 'fab fa-tiktok'; // Classe FontAwesome per TikTok
      case 'instagram':
        return 'fab fa-instagram'; // Classe FontAwesome per Instagram
      case 'telegram':
        return 'fab fa-telegram-plane'; // Classe FontAwesome per Telegram
      default:
        return '';
    }
  }
}
