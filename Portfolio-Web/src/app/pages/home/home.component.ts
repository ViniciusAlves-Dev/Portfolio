import { Component } from '@angular/core';
import { headerComponent } from '../../shared/header/header.component';
@Component({
  selector: 'app-home',
  imports: [headerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
