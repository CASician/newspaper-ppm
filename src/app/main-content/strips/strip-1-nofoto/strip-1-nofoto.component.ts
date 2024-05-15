import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strip-1-nofoto',
  standalone: true,
  imports: [],
  templateUrl: './strip-1-nofoto.component.html',
  styleUrl: './strip-1-nofoto.component.css'
})
export class Strip1NofotoComponent {
  @Input() category: string='';
  @Input() titleBlack: string='';
  @Input() titleRed: string='';
  @Input() approfUno: string='';
  @Input() approfDue: string='';
  @Input() signature: string='';
}
