import { Component } from '@angular/core';
import { SmallDevicesArticleComponent } from './small-devices-article/small-devices-article.component';

@Component({
  selector: 'app-small-devices',
  standalone: true,
  imports: [ SmallDevicesArticleComponent ],
  templateUrl: './small-devices.component.html',
  styleUrl: './small-devices.component.css'
})
export class SmallDevicesComponent {

}
