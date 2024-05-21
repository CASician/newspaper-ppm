import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RightRailComponent } from './right-rail/right-rail.component';
import { AreaBottomComponent } from './area-bottom/area-bottom.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTopContentComponent } from './header-container/header-top-content/header-top-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderContainerComponent,
    HeaderTopContentComponent,
    MainContentComponent,
    RightRailComponent,
    AreaBottomComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ilmessaggero';
}
