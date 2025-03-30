import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './theme/services/theme.service';
import { AlertComponent } from "./shared/components/alert/alert.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AlertComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private themeService = inject(ThemeService);

  constructor() { }

  ngOnInit(): void {
    this.themeService.loadUserTheme();
  }

}
