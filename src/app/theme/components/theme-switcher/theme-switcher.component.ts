import { NgClass } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';

import { ThemeService } from '../../services/theme.service';
import { HoverStyleDirective } from '../../../shared/directives/hover-style.directive';
import { Position, POSITION_VARIANTS } from '../../../shared/interfaces/position.types';

@Component({
  selector: 'theme-switcher',
  imports: [
    NgClass,
    HoverStyleDirective
  ],
  templateUrl: './theme-switcher.component.html',
  styles: ``
})
export class ThemeSwitcherComponent {

  public tooltipPosition = input<Position>('bottom');

  private themeService = inject(ThemeService);

  public theme = computed(() => this.themeService.theme());

  public positionClass = computed(() => POSITION_VARIANTS[this.tooltipPosition()]);

  constructor() { }

  public onToggleTheme(): void {
    this.themeService.toggleTheme();
  }

}
