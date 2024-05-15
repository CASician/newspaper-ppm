import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strip-combo',
  standalone: true,
  imports: [],
  templateUrl: './strip-combo.component.html',
  styleUrl: './strip-combo.component.css'
})
export class StripComboComponent {
  @Input() category: string='';
  @Input() title: string='';
  @Input() signature: string='';
  @Input() imageUrl: string='';
  @Input() approfUno: string='';
  @Input() approfDue: string='';
}
