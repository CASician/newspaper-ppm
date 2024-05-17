import { Component } from '@angular/core';
import { BigStrip4Component } from './big-strip-4/big-strip-4.component';
import { BigStrip3Component } from './big-strip-3/big-strip-3.component';
import { SportBlueComponent } from './sport-blue/sport-blue.component';

@Component({
  selector: 'app-area-bottom',
  standalone: true,
  imports: [
    BigStrip4Component,
    BigStrip3Component,
    SportBlueComponent
  ],
  templateUrl: './area-bottom.component.html',
  styleUrl: './area-bottom.component.css'
})
export class AreaBottomComponent {

}
