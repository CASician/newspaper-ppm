import { Component } from '@angular/core';
import { MyPlayComponent } from './my-play/my-play.component';
import { SocialsComponent } from './socials/socials.component';
import { ZoomComponent } from './zoom/zoom.component';
import { OpinionsComponent } from './opinions/opinions.component';

@Component({
  selector: 'app-right-rail',
  standalone: true,
  imports: [
    MyPlayComponent,
    SocialsComponent,
    ZoomComponent,
    OpinionsComponent
  ],
  templateUrl: './right-rail.component.html',
  styleUrl: './right-rail.component.css'
})
export class RightRailComponent {

}
