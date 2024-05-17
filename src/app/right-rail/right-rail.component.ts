import { Component } from '@angular/core';
import { MyPlayComponent } from './my-play/my-play.component';
import { SocialsComponent } from './socials/socials.component';
import { ZoomComponent } from './zoom/zoom.component';
import { OpinionsComponent } from './opinions/opinions.component';
import { PodcastComponent } from './podcast/podcast.component';
import { OroscopoComponent } from './oroscopo/oroscopo.component';
import { NotiziePiuLetteComponent } from './notizie-piu-lette/notizie-piu-lette.component';
import { VideoPiuVistiComponent } from './video-piu-visti/video-piu-visti.component';

@Component({
  selector: 'app-right-rail',
  standalone: true,
  imports: [
    MyPlayComponent,
    SocialsComponent,
    ZoomComponent,
    OpinionsComponent,
    PodcastComponent,
    OroscopoComponent,
    NotiziePiuLetteComponent,
    VideoPiuVistiComponent
  ],
  templateUrl: './right-rail.component.html',
  styleUrl: './right-rail.component.css'
})
export class RightRailComponent {

}
