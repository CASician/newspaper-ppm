import { Component } from '@angular/core';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderTopContentComponent } from './header-top-content/header-top-content.component';
import { HeaderMiddleContentComponent } from './header-middle-content/header-middle-content.component';
import { AreaTopComponent } from './area-top/area-top.component';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [
    HeaderMenuComponent,
    HeaderTopContentComponent,
    HeaderMiddleContentComponent,
    AreaTopComponent
  ],
  templateUrl: './header-container.component.html',
  styleUrl: './header-container.component.css'
})
export class HeaderContainerComponent {

}
