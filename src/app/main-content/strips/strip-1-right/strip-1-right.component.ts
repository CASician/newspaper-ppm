import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strip-1-right',
  standalone: true,
  imports: [],
  templateUrl: './strip-1-right.component.html',
  styleUrl: './strip-1-right.component.css'
})
export class Strip1RightComponent {
  @Input() category: string='';
  @Input() title: string='';
  @Input() imageUrl: string='';
  @Input() approfUno: string='';
  @Input() approfDue: string='';
  @Input() signature: string='';
}
