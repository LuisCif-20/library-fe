import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HoverStyleDirective } from '../../directives/hover-style.directive';

@Component({
  selector: 'home-button',
  imports: [
    RouterLink,
    HoverStyleDirective
  ],
  templateUrl: './home-button.component.html',
  styles: ``
})
export class HomeButtonComponent {

}
