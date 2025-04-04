import { Component } from '@angular/core';
import { HomeButtonComponent } from '../../components/home-button/home-button.component';
import { ThemeSwitcherComponent } from 'src/app/theme/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-error404-page',
  imports: [
    HomeButtonComponent,
    ThemeSwitcherComponent
  ],
  templateUrl: './error404-page.component.html',
  styleUrl: './error404-page.component.css'
})
export default class Error404PageComponent {

}
