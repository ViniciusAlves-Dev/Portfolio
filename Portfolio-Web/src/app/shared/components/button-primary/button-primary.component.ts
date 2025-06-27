import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-primary',
  imports: [ButtonModule],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.less'
})
export class ButtonPrimaryComponent {
  @Input() label?:string;
}
