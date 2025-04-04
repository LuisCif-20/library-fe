import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeButtonComponent } from 'src/app/shared/components/home-button/home-button.component';
import { ThemeSwitcherComponent } from 'src/app/theme/components/theme-switcher/theme-switcher.component';
import { PageToogleComponent } from '../../components/page-toogle/page-toogle.component';

@Component({
  selector: 'app-auth-layout',
  imports: [
    RouterOutlet,
    PageToogleComponent,
    HomeButtonComponent,
    ThemeSwitcherComponent,
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
