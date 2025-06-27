import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <--- Garanta que RouterOutlet está aqui
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Portfolio-Web';
  constructor (private translate: TranslateService){
    this.translate.setDefaultLang('pt')
    this.translate.use( 'pt'.toLowerCase())

  }
  
}
