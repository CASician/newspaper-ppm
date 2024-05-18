import { Component } from '@angular/core';
import { Strip1NofotoComponent } from './strips/strip-1-nofoto/strip-1-nofoto.component';
import { Strip1RightComponent } from './strips/strip-1-right/strip-1-right.component';
import { Strip2FotinaComponent } from './strips/strip-2-fotina/strip-2-fotina.component';
import { Strip3Component } from './strips/strip-3/strip-3.component';
import { StripComboComponent } from './strips/strip-combo/strip-combo.component';
import { Strip2Component } from './strips/strip-2/strip-2.component';
import { GiornoNotteComponent } from './giorno-notte/giorno-notte.component';
import { AccaddeOggiComponent } from './accadde-oggi/accadde-oggi.component';
import { SaluteComponent } from './salute/salute.component';
import { SocialClubComponent } from './social-club/social-club.component';
import { VideoDelGiornoComponent } from './video-del-giorno/video-del-giorno.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    Strip1NofotoComponent,
    Strip1RightComponent,
    Strip2FotinaComponent,
    Strip3Component,
    StripComboComponent,
    Strip2Component,
    GiornoNotteComponent,
    AccaddeOggiComponent,
    SaluteComponent,
    SocialClubComponent,
    VideoDelGiornoComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
