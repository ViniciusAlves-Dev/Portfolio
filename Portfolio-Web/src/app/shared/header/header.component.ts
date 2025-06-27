import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../components/button-primary/button-primary.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.less',
    imports: [TranslateModule, ButtonPrimaryComponent]
})
export class headerComponent {
    
}