import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [ RouterOutlet,HeaderComponent,FooterComponent ],
  template: `
  <app-header></app-header>
            <router-outlet></router-outlet>

            <app-footer></app-footer>

  `,
  styles: ``
})
export class LayoutComponent {

}
